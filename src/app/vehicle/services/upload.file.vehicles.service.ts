import { readCSV } from '@helpers/csv/read.csv';

import { IStructureFileCSVFailed } from '../interfaces/upload.file.vehicles.interface';

/**
 * Servicio que descifra una plantilla de vehículos CSV.
 * 
 * @function
 * @name UploadFileVehiclesService
 * @param args Argumentos de función.
 * @returns Segmentos de archivo generado.
 */
export const UploadFileVehiclesService = async ( args: Express.Multer.File ): Promise<null|IStructureFileCSVFailed> => {

    console.log('FILE PROPERTIES: ', args);

    /**
     * Obtención del contenido CSV.
     */
    const dataCSV = await readCSV(args.buffer);
    console.log('DATA CSV: ', dataCSV);

    /**
     * ? ANOTACIONES:
     * 
     * * A partir de aquí, continuar con la lógica correspondiente.
     * * En Multer existe una configuración que te ayuda a mover el recurso 
     *      * hacia un lugar en especifico: const upload = multer({ dest: "uploads/" });
     *  
     */

    return null;

}