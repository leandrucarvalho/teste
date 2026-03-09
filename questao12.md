Variáveis são como "recipientes" ou "caixas" que usamos para armazenar informações na memória do computador para que possamos usá-las mais tarde no nosso código. Em JavaScript, podemos declarar variáveis de três formas principais:

- **`var`**: É a forma mais antiga. Hoje em dia evito usar porque ela tem escopo de função e pode causar confusão por ser "içada" (*hoisting*).
- **`let`**: É a forma moderna que uso quando sei que o valor armazenado pode mudar (ser reatribuído) ao longo do tempo.
- **`const`**: Uso quando quero garantir que o valor não mude (constante). Uma vez atribuído, não posso reatribuir um novo valor primitivo.

A sintaxe básica é simples: primeiro dizemos a palavra-chave (`let` ou `const`), depois o nome da variável, e usamos o sinal de igual `=` para atribuir o valor.

**Exemplo:**
```javascript
let idade = 25; // declaração e atribuição
```