Sim, é perfeitamente possível e muito comum. Usamos operadores lógicos para criar condições compostas dentro do `if`:

- **Operador `&&` (E / AND)**: Todas as condições precisam ser verdadeiras para o código entrar no bloco `if`. Eu uso quando uma ação depende de vários requisitos simultâneos.
  - **Exemplo**: `if (idade >= 18 && temCNH) { console.log("Pode dirigir"); }` (Só entra se for maior de idade E tiver carteira).
- **Operador `||` (OU / OR)**: Basta que uma das condições seja verdadeira. Uso quando tenho alternativas.
  - **Exemplo**: `if (dia === "sabado" || dia === "domingo") { console.log("Final de semana"); }` (Entra se for sábado OU domingo).

Além disso, podemos encadear várias verificações usando `else if` para testar condições diferentes em sequência.