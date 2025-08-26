import { DateTime } from 'luxon';

import { generteCSV } from '@helpers/csv/generte.csv';

import { vehiclesDB } from '../utils/db.vehicles';

/**
 * Servicio que generá una plantilla de vehículos CSV.
 * 
 * @function
 * @name DownloadTemplateVehicleService
 * @returns Segmentos de archivo generado.
 */
export const DownloadTemplateVehicleService = async (): Promise<{ name: string, file: string }> => {

    /**
     * Obtención de vehículos.
     *  NOTE: Esta parte aquí es simulda, debería hacerse el llamado a base de datos correspondiente.
     */
    const vehicles = vehiclesDB();

    /**
     * Construcción del nombre del archivo
     */
    const fileName = `${DateTime.now().toFormat("yyyyLLdd_HHmmss")}-EDITAR_VEHICULOS.csv`;

    /**
     * Archivo CSV generado con los vehiculos a editar.
     */
    const csvFile = generteCSV({
        columns: [
            { id: 'Editar', title: 'Editar' },
            { id: 'VehiculoID', title: 'VehiculoID' },
            { id: 'Identificacion', title: 'Identificacion' },
            { id: 'NumeroEconomico', title: 'NumeroEconomico' },
            { id: 'ProductoAutorizado', title: 'ProductoAutorizado' },
            { id: 'TipoLimite', title: 'TipoLimite' },
            { id: 'Diario', title: 'Diario' },
            { id: 'Semanal', title: 'Semanal' },
            { id: 'Mensual', title: 'Mensual' },
        ],
        rows: vehicles.map(vehicle => ({
            ['Editar']: 'No',
            ['VehiculoID']: vehicle.idVehicle,
        }))
    });

    return {
        name: fileName,
        file: `data:text/csv;base64,${csvFile}`
    }

}