/*
===========================================================
Exercícios Práticos - Do...While
===========================================================
*/

// 1. Use do...while para imprimir números de 1 a 5.
var i = 0
    do{
        console.log(i)
        i++  // primeiramente começamos o do e depois seguimos com a condição  //Parece simples mas é confuso
    }while(i < 5);

// 2. Use do...while para pedir senha até ser "1234".
var senha = "";
do {
  console.log("Senha incorreta, digite novamente!");
  senha = "1234"; // aqui você "simula" o usuário digitando
} while (senha !== "1234");

console.log("Senha correta");

// 3. Use do...while para imprimir pares até 20.
let num = 2;
do {
  console.log(num);
  num += 2;
} while (num <= 20);


// 4. Use do...while para exibir uma mensagem pelo menos uma vez, mesmo que a condição seja falsa.
do {
  console.log("Essa mensagem aparece pelo menos uma vez!");
} while (false);


// 5. Crie um do...while que conte de 10 até 1.
let contagem = 10;
do {
  console.log(contagem);
  contagem--;
} while (contagem >= 1);


// 6. Crie um do...while que exiba os caracteres de uma string.
let palavra = "JavaScript";
let i = 0;
do {
  console.log(palavra[i]);
  i++;
} while (i < palavra.length);


// 7. Use do...while para calcular soma de 1 a 100.
let soma = 0;
let n = 1;
do {
  soma += n;
  n++;
} while (n <= 100);
console.log("Soma de 1 a 100:", soma);


// 8. Use do...while para gerar números aleatórios até sair 0.
let aleatorio;
do {
  aleatorio = Math.floor(Math.random() * 5); // 0 a 4
  console.log("Gerado:", aleatorio);
} while (aleatorio !== 0);


// 9. Peça para o aluno prever o resultado:
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);
// Saída: 0, 1, 2


// 10. Crie um do...while que calcule o fatorial de 6.
let fat = 1;
let numFat = 6;
do {
  fat *= numFat;
  numFat--;
} while (numFat > 0);
console.log("Fatorial de 6:", fat);
