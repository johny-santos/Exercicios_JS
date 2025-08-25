/*
===========================================================
Exercícios Práticos - Operadores de Comparação
===========================================================
*/

// 1. Teste 5 == "5" e exiba o resultado.
teste = 5

console.log(teste == "5"); // NO JS O == COMPARA VALORES E NÃO TIPOS

// 2. Teste 5 === "5" e exiba o resultado.
teste2 = 5

console.log( teste2 === "5"); // Nesse caso é false pois estamos comparando TIPOS E VALORES SIMULTANEAMENTE

// 3. Teste 5 != "5" e 5 !== "5". Explique a diferença.
teste3 = 5
console.log(teste3 != "5")    // false, compara só valor
console.log(teste3 !== "5")   // true, compara valor e tipo

// 4. Teste 10 > 5.
console.log(10 > 5)

// 5. Teste 10 < 5.
console.log(10 < 5)


// 6. Teste 10 >= 10.
console.log(10 >= 10)

// 7. Teste 5 <= 7.
console.log(5 <= 7)

// 8. Crie uma variável `idade = 20`. Verifique se é maior ou igual a 18.
var idade = 20
console.log(idade >= 18)

// 9. Crie uma variável `nota = 6`. Verifique se `nota >= 7`.
var nota = 6
console.log(nota >= 7);

// 10. Peça para o aluno prever o resultado de:
let a = 10, b = "10";
console.log(a == b);
console.log(a === b);
//true
//false