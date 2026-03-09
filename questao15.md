Nós usamos a palavra-chave `throw` para lançar uma exceção propositalmente. Isso é muito útil quando queremos validar dados. Se uma regra de negócio não for atendida, nós "jogamos" um erro para fora, interrompendo a execução da função naquele ponto. Geralmente, lançamos um objeto do tipo `Error`.

Por exemplo, em uma função de cálculo de salário, o código pode rodar sem erros técnicos, mas o valor pode ser negativo, o que não faz sentido para o negócio:

```javascript
function calcularSalario(valor) {
  if (valor < 0) {
    // Lançando uma exceção personalizada
    throw new Error("O salário não pode ser negativo.");
  }
  return valor * 1.1; // Aumento de 10%
}
```

Se alguém chamar `calcularSalario(-100)`, a função vai parar e lançar o erro "O salário não pode ser negativo", que pode ser capturado por um bloco `try/catch` externo.