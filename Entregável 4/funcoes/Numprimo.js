function verificaPrimo(num) {
    if (num < 1) {
        return 'Não é primo';
    } else if ((num % 3 !== 0 && num % 2 !== 0) || (num > 1 && num <= 3)) {
        return 'É primo';
    } else {
        return 'Não é primo';
    }
}

const num = 10;
console.log(verificaPrimo(num));

module.exports = verificaPrimo;