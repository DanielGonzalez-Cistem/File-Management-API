import csv from 'csv-parser';
import { Readable } from 'stream';

import { CSVRow } from './interfaces/csv.interfaces';

/**
 * Helper que ayuda a leer un archivo CSV.
 * 
 * @function
 * @name readCSV
 * @see {@link https://www.npmjs.com/package/csv-parser|**Documentación CSV Parser**}
 * @param buffer Recurso en tipo buffer.
 * @returns Resultdo de lectura de CSV.
 */
export const readCSV = ( buffer: any ): Promise<CSVRow[]> => {
  return new Promise((resolve, reject) => {
    const results: CSVRow[] = [];
    const stream = Readable.from(buffer.toString());

    stream
      .pipe(csv())
      .on('data', (data) => { results.push(data); })
      .on('end', () => { resolve(results); })
      .on('error', (err) => {
        console.log('ERROR: ', { error: 'Error procesando el CSV', details: err.message });
        reject(err);
    });
  });
} 