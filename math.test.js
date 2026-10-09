const multiplicar = require('./math');

test('multiplica 3 por 4 para obtener 12', () => {
    expect(multiplicar(3, 4)).toBe(12);
});