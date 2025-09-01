/*
===========================================================
Exercícios Práticos - forEach
===========================================================
*/

// 1. Crie um array com 5 nomes e exiba cada nome no console usando forEach.
let nomes = ["Letícia", "Isadora", "Geane", "Renata", "Lena"]
nomes.forEach((nome) => console.log(nome));

// 2. Crie um array com números e exiba o dobro de cada um usando forEach.
let numeros = [4, 5, 6, 8];
numeros.forEach((numero) => console.log(numero * 2))

// 3. Crie um array com frutas e exiba a posição (índice) de cada fruta usando forEach.
let frutas = ["Maça", "Abacate", "Mamão", "Melancia", "Romã"]
frutas.forEach((fruta, indice) => console.log(fruta,indice))

// 4. Some todos os números de um array usando forEach e exiba o resultado.
let numerosQuePrecisamSerSomados = [5, 10, 30]
let acumulador = 0
numerosQuePrecisamSerSomados.forEach((numero) => {
    acumulador += numero
    console.log(acumulador) //dentro mostra todo o fluxo do array
}); 
  //Fora mostraria só o 45

// 5. Conte quantas palavras em um array possuem mais de 5 letras usando forEach.
let palavras = ["banana", "uva", "abacate", "pêra", "melancia"];
let contador = 0;
palavras.forEach(palavra => {
  if(palavra.length > 5) contador++;
});
console.log("Quantidade de palavras com mais de 5 letras:", contador);


// 6. Crie um array de objetos (nome, idade) e exiba apenas os nomes usando forEach.
let pessoas = [
  {nome: "Ana", idade: 25},
  {nome: "Carlos", idade: 30},
  {nome: "Beatriz", idade: 22}
];
pessoas.forEach(pessoa => console.log(pessoa.nome));


// 7. Crie um array de preços e exiba apenas os que forem maiores que 50 usando forEach.
let precos = [30, 75, 60, 45, 90];
precos.forEach(preco => {
  if(preco > 50) console.log(preco);
});


// 8. Crie um array de strings e exiba todas em letras maiúsculas usando forEach.
let frutasPreferidas = ["maçã", "banana", "abacaxi", "melancia"];
frutasPreferidas.forEach(fruta => console.log(fruta.toUpperCase()));


// 9. Crie um array de números e exiba apenas os pares usando forEach.
let numerosFinais = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numerosFinais.forEach(n => {
  if(n % 2 === 0) console.log(n);
});


// 10. Crie um array de notas e exiba “Aprovado” para notas >= 7 e “Reprovado” para as demais usando forEach.
let notas = [6, 8, 9, 5, 7, 4];
notas.forEach(nota => {
  if(nota >= 7) console.log("Aprovado");
  else console.log("Reprovado");
});
