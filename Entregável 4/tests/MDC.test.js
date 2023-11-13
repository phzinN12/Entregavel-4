const mdc = require('../funcoes/MDC');

test('o mdc de 6 e 12 é 6', () => {
    const n1 = 6;
    const n2 = 12;
    expect(mdc(n1, n2)).toBe(6);
});
test('o mdc de 2 e 10 é 2', () => {
    const n1 = 2;
    const n2 = 10;
    expect(mdc(n1, n2)).toBe(2);
});
