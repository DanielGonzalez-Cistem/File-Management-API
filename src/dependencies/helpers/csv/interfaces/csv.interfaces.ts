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

/**
 * Interfaz que retorna el contenido de un CSV de vehiculo.
 */
export interface CSVRow {
    Editar: string;
    VehiculoID: string;
    NumeroEconomico?: string;
    ProductoAutorizado?: string;
    TipoLimite?: string;
    Diario?: string;
    Semanal?: string;
    Mensul?: string;
}