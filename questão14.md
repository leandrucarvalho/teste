O bloco `try` é usado junto com o `catch` para tratamento de exceções (erros). A sintaxe funciona assim: colocamos o código que pode dar erro dentro do bloco `try`. Se ocorrer um erro lá, a execução pula imediatamente para o bloco `catch`, onde podemos tratar esse erro sem que o programa "quebre" ou pare de funcionar abruptamente.

Um exemplo prático seria tentar acessar uma propriedade de um objeto que veio de uma API e pode estar indefinido:

```javascript
try {
  // Código que pode falhar
  const usuario = JSON.parse('{"nome": "Ana"}');
  console.log(usuario.idade.toFixed(2)); // Erro: idade é undefined
} catch (error) {
  // O que fazer se der erro
  console.log("Ocorreu um erro ao processar os dados: " + error.message);
}
```

Neste caso, como `idade` não existe, o código entraria no `catch` e imprimiria a mensagem de erro amigável.