/**
 * Interfaz que define las propiedades de retorno de errores en el archivo.
 */
export interface IStructureFileCSVFailed {
    total_errors: number,
    errors: IBodyError[]
}

/**
 * Interfaz que define las propiedades de estructura de error.
 */
interface IBodyError {
    idVehicle: number,
    section: string,
    description: string
}