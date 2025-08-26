import dotenv from 'dotenv';
import env from 'env-var';

dotenv.config();

/**
 * Centralización de variables de entorno raíz.
 * @see {@link https://www.npmjs.com/package/env-var|**Documentación env-var**}
 */
export const rootEnvs = {
    NODE_ENV: env.get('NODE_ENV').required().asEnum(['development', 'production', 'test']),
    VERSION: env.get('VERSION').required().asString(),
    BRAND: env.get('BRAND').required().asString(),
    ENABLE_SHOW_ERROR: env.get('ENABLE_SHOW_ERROR').required().asEnum(['YES', 'NO']),
    TIMEZONE: env.get('TIMEZONE').required().asString(),
}

/**
 * Centralización de variables de entorno para puertos de aplicación.
 * @see {@link https://www.npmjs.com/package/env-var|**Documentación env-var**}
 */
export const portEnvs = {
    PORT: env.get('PORT').required().asInt(),
}