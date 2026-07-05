const { isValidEmail } = require('./email');

describe('isValidEmail', () => {
  describe('emails válidos', () => {
    test.each([
      'usuario@dominio.com',
      'nombre.apellido@empresa.com.mx',
      'user+tag@sub.dominio.org',
      'USER@DOMINIO.COM',
      'user123@dominio.io',
    ])('acepta "%s"', (email) => {
      expect(isValidEmail(email)).toBe(true);
    });
  });

  describe('emails inválidos', () => {
    test.each([
      ['usuario@.com',       'dominio empieza con punto'],
      ['@dominio.com',       'sin parte local'],
      ['usuario@dominio.',   'dominio termina en punto'],
      ['usuario@@dominio.com', 'doble arroba'],
      ['usuario@dom..com',   'doble punto en dominio'],
      ['usuariosindominio',  'sin arroba ni dominio'],
      ['',                   'cadena vacía'],
      [null,                 'valor null'],
      [undefined,            'valor undefined'],
      [123,                  'tipo numérico'],
    ])('rechaza "%s" (%s)', (email) => {
      expect(isValidEmail(email)).toBe(false);
    });
  });
});
