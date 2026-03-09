function somaImpares(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) { // Verifica se o resto da divisão por 2 é diferente de 0
      soma += i;
    }
  }
  return soma;
}

// Exemplos de teste
console.log("Soma dos ímpares até 5:", somaImpares(5));   // Esperado: 9 (1+3+5)
console.log("Soma dos ímpares até 10:", somaImpares(10)); // Esperado: 25 (1+3+5+7+9)
console.log("Soma dos ímpares até 1:", somaImpares(1));   // Esperado: 1
console.log("Soma dos ímpares até 0:", somaImpares(0));   // Esperado: 0