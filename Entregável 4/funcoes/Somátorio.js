function calculoSomatorio(numeros) {
  let acumulador = 0;

  for (let i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
  }

  return acumulador;
}

module.exports = calculoSomatorio;


