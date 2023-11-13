const primo = require('../funcoes/Numprimo');

test('verifica se 10 é primo', () => {
    const num = 10;
    expect(primo(num)).toBe('Não é primo');
});
test('verifica se 5 é primo', () => {
    const num = 5;
    expect(primo(num)).toBe('É primo');
});
