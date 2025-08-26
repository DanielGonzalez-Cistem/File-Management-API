import { Router } from 'express';

import { VehicleRouter } from './vehicle/router';
import { WelcomeRouter } from './welcome/router';

/**
 * Definición de tipos de enrutadores.
 */
type TypeRouters = 
    'vehicle' |
    'welcome'                 
;

/**
 * Definición dinámica de los enrutadores en el servidor **App**.
 */
type TypeAppRouters = {
    [K in TypeRouters]: Router;
}

/**
 * Centralización de enrutadores del servidor **App**.
 */
const routers: TypeAppRouters = {
    vehicle: VehicleRouter(),
    welcome: WelcomeRouter()
}

/**
 * Centralización de enrutadores del servidor **App**.
 * 
 * @function
 * @name repositoryRouters
 * @param router - Nombre de enrutador a invocar.
 * @returns Enrutador
 */
export const repositoryRouters = ( router: TypeRouters ) => routers[router];