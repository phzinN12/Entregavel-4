function contagem(primeiroDado, N) {
    let contador = 0;

    for (let i = primeiroDado; i <= N; i++) {
        contador++;
    }

    return contador;
}

const N = 2;
const primeiroDado = 0;

console.log(`Número de valores inteiros entre ${primeiroDado} e ${N} é: ${contagem(primeiroDado, N)}`);


module.exports = contagem;