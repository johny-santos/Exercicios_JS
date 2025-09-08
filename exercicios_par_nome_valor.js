/*
===========================================================
Exercícios Práticos - Par Nome/Valor
===========================================================
*/

// 1. Declare uma variável string e exiba seu valor no console.
const mensagem = "Olá, mundo!";
console.log(mensagem);

// 2. Crie um objeto com pelo menos 3 pares nome/valor e exiba uma das propriedades.
const carro = { marca: "Toyota", modelo: "Corolla", ano: 2020 };
console.log(carro.modelo);

// 3. Crie um array com 5 elementos e exiba o terceiro elemento.
const frutas = ["maçã", "banana", "uva", "laranja", "pera"];
console.log(frutas[2]); // índice começa em 0

// 4. Crie um objeto e adicione uma nova propriedade dinamicamente.
const pessoa = { nome: "Ana" };
pessoa.idade = 28;
console.log(pessoa);

// 5. Mostre como acessar um valor de um objeto usando colchetes e uma variável.
const chave = "nome";
console.log(pessoa[chave]);

// 6. Crie uma função que recebe um objeto e exibe as chaves e valores (usando for...in).
function mostrarObjeto(obj) {
  for (let chave in obj) {
    console.log(`${chave}: ${obj[chave]}`);
  }
}
mostrarObjeto({ linguagem: "JavaScript", nivel: "Iniciante" });

// 7. Declare um objeto aninhado (objeto dentro de objeto) e exiba um valor profundo.
const empresa = {
  nome: "Tech Solutions",
  endereco: {
    cidade: "São Paulo",
    bairro: "Centro"
  }
};
console.log(empresa.endereco.cidade);

// 8. Crie um array e mostre que o índice é o nome e o valor é o conteúdo.
const cores = ["azul", "verde", "vermelho"];
cores.forEach((valor, indice) => {
  console.log(`Índice: ${indice}, Valor: ${valor}`);
});

// 9. Crie uma variável com escopo global e outra local dentro de função e mostre seus valores.
let global = "Sou global";
function escopo() {
  let local = "Sou local";
  console.log(global);
  console.log(local);
}
escopo();

// 10. Modifique o valor de uma propriedade de um objeto e exiba antes e depois.
const livro = { titulo: "Dom Casmurro", autor: "Machado de Assis" };
console.log("Antes:", livro.titulo);
livro.titulo = "Memórias Póstumas de Brás Cubas";
console.log("Depois:", livro.titulo);
