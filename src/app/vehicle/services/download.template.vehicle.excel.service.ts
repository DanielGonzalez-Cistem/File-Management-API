import ExcelJS, { Worksheet } from 'exceljs';
import { DateTime } from 'luxon';

import { selectorTypeLimitValidator, selectorValidator, numberValidator } from '../helpers/donwload_template/validations';
import { vehiclesDB } from '../utils/db.vehicles';

export const DownloadTemplateVehicleExcelService = async () => {

    /**
     * Obtención de vehículos.
     *  NOTE: Esta parte aquí es simulda, debería hacerse el llamado a base de datos correspondiente.
     */
    const vehicles = vehiclesDB();

    /**
     * Construcción del nombre del archivo
     */
    const fileName = `${DateTime.now().toFormat("yyyyLLdd_HHmmss")}-EDITAR_VEHICULOS.xlsx`;

    /**
     * Inicialización de instancia para trabajar con **Excel**.
     */
    const wb = new ExcelJS.Workbook();

    /**
     * Inicialización de instancia para añadir una hoja nueva llamada **Vehículos**. 
     */
    const ws: Worksheet = wb.addWorksheet('Vehículos');

    //? Definición de columnas
    ws.columns = [
        { header: "Editar", key: "editar", width: 12 },
        { header: "VehiculoID", key: "vehiculoId", width: 12 },
        { header: "Identificacion", key: "identificacion", width: 25 },
        { header: "NumeroEconomico", key: "numeroEconomico", width: 20 },
        { header: "Regular", key: "regular", width: 12 },
        { header: "Premium", key: "premium", width: 12 },
        { header: "Diesel", key: "diesel", width: 12 },
        { header: "Aditivos", key: "aditivos", width: 12 },
        { header: "TipoLimite", key: "tipoLimite", width: 15 },
        { header: "Diario", key: "diario", width: 12 },
        { header: "Semanal", key: "semanal", width: 12 },
        { header: "Mensual", key: "mensual", width: 12 },
    ];

    //? Congelar encabezados
    ws.views = [{ state: "frozen", ySplit: 1 }];

    //? Insertar datos de vehículos
    vehicles.forEach(v => {
        ws.addRow({ vehiculoId: v.idVehicle });
    });

    const lastRow = ws.rowCount;

    //? Columnas con selector de "SI" o "NO"
    ["A", "E", "F", "G", "H"].forEach(col => {
        (ws as any).dataValidations.add(`${col}2:${col}${lastRow}`, selectorValidator);
    });

    //? Columnas con selector de "IMPORTE" o "LITRO"
    (ws as any).dataValidations.add(`I2:I${lastRow}`, selectorTypeLimitValidator);

    //? Columnas con valor numérico de "DIARIO", "SEMANAL" y "MENSUAL"
    (ws as any).dataValidations.add(`J2:J${lastRow}`, numberValidator);
    (ws as any).dataValidations.add(`K2:K${lastRow}`, numberValidator);
    (ws as any).dataValidations.add(`L2:L${lastRow}`, numberValidator);

    //? Exportar como base64
    const buffer = await wb.xlsx.writeBuffer();
    const base64 = Buffer.from(buffer).toString("base64");

    return {
        name: fileName,
        file: `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${base64}`
    }

}