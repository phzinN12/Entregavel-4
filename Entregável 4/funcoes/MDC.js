function calcularMDC(n1, n2) {
    let limite;

    if (n1 < n2) {
        limite = n1;
    } else {
        limite = n2;
    }

    let mdc = 1;

    for (let i = 2; i <= limite; i++) {
        if (n1 % i === 0 && n2 % i === 0) {
            mdc *= i;
            n1 /= i;
            n2 /= i;
            i--;
        }
    }

    return mdc;
}

const n1 = 6;
const n2 = 12;

console.log("MDC:", calcularMDC(n1, n2));

module.exports = calcularMDC;