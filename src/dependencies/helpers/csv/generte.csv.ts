import { createObjectCsvStringifier } from 'csv-writer';

import { IGenerateCSV } from './interfaces/csv.interfaces';

/**
 * Helper que ayuda a generar un archivo CSV.
 * 
 * @function
 * @name generteCSV
 * @see {@link https://www.npmjs.com/package/csv-writer|**Documentación CSV Writer**}
 * @param args Argumentos de función.
 * @returns Archivo CSV codfificado en formato Base64.
 */
export const generteCSV = ( args: IGenerateCSV ): string => {

    /**
     * Asignación de cabeceras para el CSV.
     */
    const CSVStringifier = createObjectCsvStringifier({
        header: args.columns
    });

    /**
     * Inicialización de contenido CSV.
     */
    let csvOutput = CSVStringifier.getHeaderString();
    csvOutput += CSVStringifier.stringifyRecords(args.rows);

    /**
     * Archivo CSV codificado en formato Base64.
     */
    const CSVBase64 = Buffer.from(csvOutput!).toString('base64');

    return CSVBase64;

}