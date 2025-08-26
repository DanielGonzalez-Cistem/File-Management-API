import { Request, Response, NextFunction } from 'express';

import { statusCode } from '@utils/status_code/handler';

import { UploadFileVehiclesService } from '../services/upload.file.vehicles.service';

/**
 * Controlador que coordina la carga de archivo para edición de vehículos.
 * 
 * @function
 * @name UploadFileVehiclesController
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns {Promise<void>} Promesa que resuelve la carga de archivo para edición de vehículos.
*/
export const UploadFileVehiclesController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    //? Invocación de servicio
    const response = UploadFileVehiclesService(req.file!);

    res.status(statusCode.OK);
    res.json({
        success: true,
        status_code: statusCode.OK,
        response
    });
    res.end();

}