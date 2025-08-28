/**
 * Definición de reglas para las columnas que contengan un selector.
 */
export const selectorValidator = {
    type: 'list' as const,
    allowBlank: true,
    formulae: ['"SI,NO"'],
    showErrorMessage: true,
    errorTitle: 'Entrada no válida',
    error: 'Solo se permite "SI" o "NO".',
    showInputMessage: true,
    promptTitle: 'Seleccione',
    prompt: 'Elija "SI" o "NO" del menú.',
}

/**
 * Definición de reglas para la columna **TipoLimite** que contiene un selector.
 */
export const selectorTypeLimitValidator = {
    type: 'list' as const,
    allowBlank: true,
    formulae: ['"IMPORTE,LITROS"'],
    showErrorMessage: true,
    errorTitle: 'Entrada no válida',
    error: 'Solo se permite "IMPORTE" o "LITROS".',
    showInputMessage: true,
    promptTitle: 'Seleccione',
    prompt: 'Elija "IMPORTE" o "LITROS" del menú.',
}

/**
 * Definición de reglas para ls columnas **Diario**, **Semanal** y **Mensual**.
 */
export const numberValidator = {
    type: 'whole',         // número entero
    operator: 'between',
    formula1: '1',         // mínimo permitido
    formula2: '999999',         // mínimo permitido
    showErrorMessage: true,
    errorTitle: 'Entrada no válida',
    error: 'Debe ingresar un número entero positivo (>= 1)',
    showInputMessage: true,
    promptTitle: 'Sólo números',
    prompt: 'Ingrese un número entero positivo',
    allowBlank: false
};