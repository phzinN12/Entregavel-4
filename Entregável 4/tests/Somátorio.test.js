const somatorio = require('../funcoes/Somátorio');

test('A soma dos números 10,1,2 deve ser 13', () => {
  const numeros = [10,1,2];
  expect(somatorio(numeros)).toBe(13);
});
test('A soma dos números 15,30,5 deve ser 50', () => {
    const numeros = [15,30,5];
    expect(somatorio(numeros)).toBe(50);
  });

