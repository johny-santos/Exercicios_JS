/*
===========================================================
Exercícios Práticos - Arrays
===========================================================
*/

// 1. Crie um array com 5 elementos e exiba o terceiro.
const fiveElements = ["Computador", "Notebook", "Caderno", "Celular", "Matemática"]
console.log(fiveElements[2]);
 //Para exibir algo de um array seleciona a const nome do array e passa o índice entre []

// 2. Adicione um elemento ao final do array.
fiveElements.push("lapiseira"); //.push sempre adiciona um elemento ao final de um array
console.log(fiveElements);

// 3. Remova o primeiro elemento do array.
fiveElements.shift() //.shift serve muito bem para remover o primeiro item de uma lista
console.log(fiveElements);

// 4. Use map para transformar todos os elementos em strings maiúsculas.
const fiveElementsUpper = fiveElements.map(elemento => elemento.toUpperCase())
console.log(fiveElementsUpper);

// 5. Use filter para criar um novo array apenas com números pares.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosPares = numeros.filter(elemento => elemento % 2 == 0 )
console.log(numerosPares)

// 6. Use reduce para somar todos os números de um array.
const nemerosASeremSomados = [1,3,4,5]
const numerosSomados = nemerosASeremSomados.reduce((acumulador, atual) => acumulador + atual, 0); //Começa em 0
console.log(numerosSomados);                        // acumulador começa em 0 e vai somando com o próximo número da lista

// 7. Use find para encontrar o primeiro elemento maior que 10.
const elementosPrincipais = [1, 5, 6, 10, 12, 16, 20]
const primeiroMaiorDez = elementosPrincipais.find(primeiro => primeiro > 10)
console.log(primeiroMaiorDez);

// 8. Ordene um array de números em ordem crescente.
const arrayDesordenado = [5, 3, 8, 1, 4];
const arrayOrdenado = arrayDesordenado.sort()
console.log(arrayOrdenado);

// 9. Inverta a ordem dos elementos de um array.
const nomesRandomicos = ["Cecília", "Renata", "Cauã", "Sidartha"]
const nomeReordenados = nomesRandomicos.reverse()
console.log(nomeReordenados)

// 10. Faça a troca de valores entre dois índices usando destructuring.
let arr = [1, 2, 3, 4];
[arr[0], arr[3]] = [arr[3], arr[0]];
console.log(arr); // [4, 2, 3, 1]
