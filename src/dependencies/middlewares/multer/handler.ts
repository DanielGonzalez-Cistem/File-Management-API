import multer from 'multer';

/**
 * Middleware que habilita la codificación de archivos y los inyecta en la petición.
 * 
 * @function
 * @name Multer
 * @see {@link https://www.npmjs.com/package/multer|**Documentación Multer**}
 * @returns Gestión de Archivos vía HTTP.
 */
export const Multer = () => multer({
    storage: multer.memoryStorage()
});