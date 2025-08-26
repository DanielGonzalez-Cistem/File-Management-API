import { body } from 'express-validator';
import { validateRules } from '@middlewares/express_validator/validate.rules';
import { checkFile } from '@helpers/custom_rules/handler';

/**
 * Definición de esquema de errores al **Edición Masiva de Vehículos**.
 */
export const uploadFileVehicleRule: TGValidation = [
    body('file')
        .custom(checkFile)
    ,

    validateRules
];