import { IDeployServer, IGetNetworks } from './interfaces/network.interface';
import { getNetworks } from './helpers/networks.helper';

/**
 * Función que obtiene las interfaces de red para entrelazarla con un servidor.
 * 
 * @function
 * @name deployNetworks
 * @param args Argumentos de despliegue de interfaces de red.
 * @param args.enableSocket Bandera que indica si requerirá de configuración WebSocket.
 * @param args.environment Define el entorno a ejecutar.
 * @param args.port Define el número de puerto de despliegue.
 * @param args.server Define el servidor a ejecutar.
 */
export const deployNetworks = ( args: IDeployServer ): void => {

    //? Desestructuración de argumentos
    const { enableSocket, environment, port, server } = args;

    //* Despliegue de servidor con interfaces de red
    server.listen(port, '0.0.0.0', () => {

        console.log(`⚡[${environment}] running at: `);
        console.log(`  ➜ Local:   http://localhost:${port}`);

        const networkAddresses = getNetworks({
            port,
            suffix: 'http',
            host: ''
        });

        for (const addr of networkAddresses) {
            console.log(`  ➜ Network: ${addr}\n`);
        }
        
    });

}