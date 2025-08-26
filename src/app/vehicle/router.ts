import { Router } from 'express';
import { repositoryControllers } from './controllers/repository';

/**
 * Enrutador que coordina los servicios de **Vehículo**.
 * 
 * @function
 * @name VehicleRouter
 * @returns Enrutador
*/
export const VehicleRouter = (): Router => {

    /**
     * Instancia de enrutador.
    */
    const vehicleRouter: Router = Router();

    /**
     * Centralización de rutas del enrutador **Vehículo**.
    */
    const paths = {
        downloadTemplate: '/download_template',
        uploadVehicles: '/upload/vehicles',
    };

    /**
     * * Servicio que genera un template CSV de vehículos.
     * 
     * @function
     * @name GET /download_template
     * @path {GET} /download_template
     * @memberof vehicleRouter
    */
    vehicleRouter.get(
        paths.downloadTemplate,
        repositoryControllers('downloadTemplate')
    );

    // /**
    //  * * Servicio que carga el archivo de vehículos a editar.
    //  * 
    //  * @function
    //  * @name POST /download_template
    //  * @path {POST} /download_template
    //  * @memberof vehicleRouter
    // */
    // vehicleRouter.post(
    //     paths.uploadVehicles,
    //     repositoryControllers('uploadVehicles')
    // );

    return vehicleRouter;

}