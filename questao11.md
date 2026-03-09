Em JavaScript, quando recebemos um JSON, ele geralmente é convertido em um objeto ou array de objetos. Para percorrer e manipular esses dados, temos três formas muito comuns:

1. **`map()`**: É o método que eu mais uso quando preciso transformar os dados e criar um novo array com os resultados. Por exemplo, se eu tiver um array de usuários (vindo de um JSON) e quiser criar um novo array contendo apenas os nomes deles, o `map` é ideal. Ele não altera o array original.
   - **Exemplo**: `const nomes = usuarios.map(user => user.nome);`

2. **`forEach()`**: Uso este quando preciso apenas executar uma ação para cada item, sem necessariamente criar um novo array. É como um loop "faça isso para cada elemento". É útil para imprimir valores no console ou salvar dados em um banco, por exemplo.
   - **Exemplo**: `usuarios.forEach(user => console.log(user.id));`

3. **`for...of`**: É uma sintaxe mais moderna do loop `for`. É muito útil quando eu preciso de mais controle sobre a iteração ou quero parar o loop no meio do caminho (usando o `break`), coisa que o `forEach` não permite. Ele itera diretamente sobre os valores dos elementos.
   - **Exemplo**:
     ```javascript
     for (const user of usuarios) {
       if (user.idade > 18) console.log(user);
     }
     ```