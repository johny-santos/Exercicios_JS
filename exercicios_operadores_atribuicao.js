/*
===========================================================
Exercícios Práticos - Operadores de Atribuição
===========================================================
*/

// 1. Crie uma variável `n = 10`. Aplique `n += 5` e exiba.
var n = 10
n += 5
console.log(n);

// 2. Continue com o mesmo `n`. Aplique `n -= 3` e exiba.
var n = 10
n -= 3
console.log(n);

// 3. Continue com o mesmo `n`. Aplique `n *= 2` e exiba.
var n = 10
n *= 2
console.log(n);

// 4. Continue com o mesmo `n`. Aplique `n /= 4` e exiba.
var n = 10
n /= 4
console.log(n);

// 5. Continue com o mesmo `n`. Aplique `n %= 3` e exiba.
var n = 10
n %= 3
console.log(n)

// 6. Continue com o mesmo `n`. Aplique `n **= 2` e exiba.
var n = 10
n **= 2
console.log(n);

// 7. Mostre que `n = n + 1` é equivalente a `n += 1`.
var n = 5 // valor inicial 5
n = n + 1 // somamndo tradicionalmente 6
console.log(n)
n += 1    // somando dessanova maneira 7 
console.log(n)

// 8. Crie `a = 5` e `b = 2`. Atualize `a` usando `a *= b`. Exiba o resultado.
var a = 5
var b = 2

a *= b
console.log(a);

// 9. Crie uma variável `saldo = 1000`. Desconte 15% usando operador de atribuição.
var saldo = 1000
saldo -= saldo * 0.15
console.log(saldo)

// 10. Peça para o aluno prever o resultado antes de rodar:
// let x = 2;
// x += 3;
// x *= 2;
// x -= 4;
// console.log(x);
console.log("Preveja o resultado da seguinte expressão antes de rodar: ")
 let x = 2; // Iguala X a 2
 x += 3;   // O valor de X += 3 => 2 + 3 = 5
 x *= 2;   // O valor de X *= 2 => 5 * 2 = 10 
 x -= 4;   // O valor de X -= 4 => 10 - 4 = 6
 console.log(x)
