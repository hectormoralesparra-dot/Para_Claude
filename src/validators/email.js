/**
 * Valida que una dirección de email tenga un formato correcto.
 *
 * Rechaza casos como:
 *   - usuario@.com   (dominio empieza con punto)
 *   - @dominio.com   (sin parte local)
 *   - usuario@dom..com (doble punto en dominio)
 *   - usuario@dominio. (dominio termina en punto)
 *   - usuario@@dominio.com (doble arroba)
 *
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (typeof email !== 'string') return false;

  // Parte local: caracteres permitidos antes del @
  // Dominio: sin puntos consecutivos, sin empezar/terminar con punto
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  return EMAIL_REGEX.test(email.trim());
}

module.exports = { isValidEmail };
