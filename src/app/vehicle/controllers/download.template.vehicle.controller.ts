import { Request, Response, NextFunction } from 'express';

import { statusCode } from '@utils/status_code/handler';

import { DownloadTemplateVehicleService } from '../services/download.template.vehicle.service';

/**
 * Controlador que coordina la generación de una plantilla CSV de vehículos.
 * 
 * @function
 * @name DownloadTemplateVehicleController
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns {Promise<void>} Promesa que resuelve la generación de una plantilla CSV de vehículos.
*/
export const DownloadTemplateVehicleController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    //? Invocación de servicio
    const templateCSV = await DownloadTemplateVehicleService();
    
    res.status(statusCode.OK);
    res.json({
        success: true,
        status_code: statusCode.OK,
        response: templateCSV
    });
    res.end();

}