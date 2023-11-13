const fibonnaci = require('../funcoes/Fibonacci');

test('os 10 primeiros termos da sequência de fibonacci devem estar corretos', () => {
    expect(fibonnaci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
test('os 2 primeiros termos da sequência de fibonacci devem ser 0 e 1', () => {
    expect(fibonnaci(2)).toMatchObject([0, 1]);
});
