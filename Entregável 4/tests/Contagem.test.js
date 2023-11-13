const contagem = require('../funcoes/Contagem');

test('Conta o número de valores inteiros entre 0 e 2', () => {
    const N = 2;
    const primeiroDado = 0;
    expect(contagem(primeiroDado, N)).toBe(3);
});
test('Conta o número de valores inteiros entre 5 e 10', () => {
    const N = 10;
    const primeiroDado = 5;
    expect(contagem(primeiroDado, N)).toBe(6);
});