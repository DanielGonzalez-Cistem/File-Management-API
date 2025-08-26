/**
 * Interfaz que define las propiedades para generar un archivo CSV.
 */
export interface IGenerateCSV {
    columns: IColumn[],
    rows: any[]
}

/**
 * Interfaz de define la estructura de un columna.
 */
interface IColumn {
    id: string;
    title: string;
}