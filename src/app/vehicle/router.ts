import { Router } from 'express';

import { Multer } from '@middlewares/multer/handler';

import { repositoryControllers } from './controllers/repository';
import { uploadFileVehicleRule } from './rules/upload.file.vehicle.rule';

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
     * Instancia de multer para gestionar el archivo por la petición.
     */
    const multer = Multer();

    /**
     * Centralización de rutas del enrutador **Vehículo**.
    */
    const paths = {
        downloadTemplateCsv: '/download_template',
        downloadTemplateXls: '/download_template_xls',
        uploadVehicles     : '/upload_file/mass_edition_vehicles',
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
        paths.downloadTemplateCsv,
        repositoryControllers('downloadTemplate')
    );

    /**
     * * Servicio que carga el archivo de vehículos a editar.
     * 
     * @function
     * @name POST /upload_file/mass_edition_vehicles
     * @path {POST} /upload_file/mass_edition_vehicles
     * @memberof vehicleRouter
    */
    vehicleRouter.post(
        paths.uploadVehicles,
        [
            multer.single('file'), //? 👈🏻 Se trabaja con un solo archivo
            ...uploadFileVehicleRule
        ],
        repositoryControllers('uploadVehicles')
    );

    /**
     * * Servicio que genera un template experimental en formato XLSM.
     * 
     * @function
     * @name GET /test_template_xlsm
     * @path {GET} /test_template_xlsm
     * @memberof vehicleRouter
    */
    vehicleRouter.get(
        paths.downloadTemplateXls,
        repositoryControllers('downloadTemplateExcel')
    );

    return vehicleRouter;

}