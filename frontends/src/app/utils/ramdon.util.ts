/**
 * Utilidades para generación de valores aleatorios.
 */

/**
 * Genera un número entero aleatorio entre min (incluido) y max (incluido).
 * @param min Valor mínimo.
 * @param max Valor máximo.
 * @returns Número aleatorio.
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Genera una cadena aleatoria de longitud dada.
 * @param length Longitud de la cadena.
 * @returns Cadena aleatoria.
 */
export function randomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(randomInt(0, chars.length - 1));
  }
  return result;
}

/**
 * Selecciona un elemento aleatorio de un array.
 * @param array Array de elementos.
 * @returns Elemento aleatorio.
 */
export function randomElement<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined;
  return array[randomInt(0, array.length - 1)];
}
