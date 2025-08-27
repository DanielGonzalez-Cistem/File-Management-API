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