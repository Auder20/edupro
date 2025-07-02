/**
 * Utilidades para manipulación de strings
 */

/**
 * Capitaliza la primera letra de un string
 * @param str string de entrada
 * @returns string con la primera letra en mayúscula
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Convierte un string a camelCase
 * @param str string de entrada
 * @returns string en camelCase
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/[-_ ]+(\w)/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^[A-Z]/, c => c.toLowerCase());
}

/**
 * Trunca un string a una longitud máxima y añade '...' si es necesario
 * @param str string de entrada
 * @param maxLength longitud máxima
 * @returns string truncado
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

/**
 * Elimina espacios al inicio y final y reduce múltiples espacios internos a uno solo
 * @param str string de entrada
 * @returns string limpio
 */
export function cleanSpaces(str: string): string {
  return str.trim().replace(/\s+/g, ' ');
}
