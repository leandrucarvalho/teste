function inverterPalavra(palavra) {
  return palavra.split('').reverse().join('');
}

// Exemplos de teste
console.log("Inverter 'javascript':", inverterPalavra("javascript")); // Esperado: "tpircsavaj"
console.log("Inverter 'world':", inverterPalavra("world")); // Esperado: "dlrow"