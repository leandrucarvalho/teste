function dividirNumeros(number1, number2) {
 try
 {
 if (number2 === 0)
 {
 throw new Error("Divisão por zero não é permitida.");
 }
 return number1 / number2;
 }
 catch (error)
 {
 return "Erro: " + error.message;
 }
 }

// a) console.log(dividirNumeros(20, 2));
// Resultado: 10
// Explicação: Como number2 (2) é diferente de 0, o erro não é lançado. A função executa a divisão normalmente (20 / 2) e retorna 10.

// b) console.log(dividirNumeros(6, 0));
// Resultado: "Erro: Divisão por zero não é permitida."
// Explicação: Como number2 é igual a 0, a função lança o erro (throw), que é capturado pelo bloco catch. A função retorna a string de erro definida.

// c) console.log(dividirNumeros(21, 3));
// Resultado: 7
// Explicação: Como number2 (3) é diferente de 0, o erro não é lançado. A função executa a divisão normalmente (21 / 3) e retorna 7.