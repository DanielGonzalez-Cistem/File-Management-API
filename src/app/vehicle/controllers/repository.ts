import { Request, Response, NextFunction } from 'express';

import { DownloadTemplateVehicleController } from './download.template.vehicle.controller';

/**
  * Definición de tipos de controladores.
 */
type TypeControllers = 
    'downloadTemplate'
;

/**
  * Definición dinámica de los controladores en **Vehículos**.
 */
type TypeAppControllers = {
    [K in TypeControllers]: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

/**
  * Centralización de controladores de **Vehículos**.
 */
const controllers: TypeAppControllers = {
    downloadTemplate: DownloadTemplateVehicleController
}

/**
  * Centralización de enritadores de **Vehículos**.
  * 
  * @function
  * @name repositoryRouters
  * @param controller - Nombre de controlador a invocar.
  * @returns Controlador
 */
export const repositoryControllers = ( controller: TypeControllers ) => controllers[controller];