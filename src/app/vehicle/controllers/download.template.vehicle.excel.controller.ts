import { Request, Response, NextFunction } from 'express';

import { statusCode } from '@utils/status_code/handler';

import { DownloadTemplateVehicleExcelService } from '../services/download.template.vehicle.excel.service';

/**
 * Controlador que generá un template de vehículos en formato XLSX
 * 
 * @function
 * @name DownloadTemplateVehicleExcelController
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns {Promise<void>} Promesa que resuelve un template experimental XLSM.
*/
export const DownloadTemplateVehicleExcelController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    //? Invocación de servicio
    const response = await DownloadTemplateVehicleExcelService();

    res.status(statusCode.OK);
    res.json({
        success: true,
        status_code: statusCode.OK,
        response
    });
    res.end();

}