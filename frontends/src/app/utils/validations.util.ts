/**
 * Utilidades para validaciones comunes.
 */

/**
 * Valida si un string es un email válido.
 * @param email - Email a validar.
 */
export function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Valida si un string tiene una longitud mínima.
 * @param value - String a validar.
 * @param minLength - Longitud mínima.
 */
export function hasMinLength(value: string, minLength: number): boolean {
  return value.length >= minLength;
}

/**
 * Valida si un string está vacío.
 * @param value - String a validar.
 */
export function isEmpty(value: string): boolean {
  return value.trim().length === 0;
}

/**
 * Valida si un string es un número.
 * @param value - String a validar.
 */
export function isNumeric(value: string): boolean {
  return !isNaN(Number(value));
}
