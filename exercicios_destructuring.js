/*
===========================================================
Exercícios Práticos - Destructuring
===========================================================
*/

// 1. Usando destructuring, pegue os dois primeiros valores de um array.
const numeros = [10, 20, 30, 40];
const [primeiro, segundo] = numeros;
console.log(primeiro, segundo); // 10 20

// 2. Use destructuring para extrair propriedades nome e idade de um objeto.
const pessoa = { nome: "João", idade: 25, cidade: "SP" };
const { nome, idade } = pessoa;
console.log(nome, idade); // João 25

// 3. Use destructuring para extrair uma propriedade que não existe e defina um valor padrão.
const { profissao = "Desconhecido" } = pessoa;
console.log(profissao); // Desconhecido

// 4. Use destructuring aninhado para extrair propriedades de um objeto dentro de outro.
const usuario = {
  id: 1,
  perfil: { usuarioNome: "Maria", usuarioIdade: 30 }
};
const { perfil: { usuarioNome, usuarioIdade } } = usuario;
console.log(usuarioNome, usuarioIdade); // Maria 30

// 5. Use rest operator para pegar os elementos restantes de um array depois de extrair alguns.
const [um, dois, ...resto] = [1, 2, 3, 4, 5];
console.log(um, dois, resto); // 1 2 [3, 4, 5]

// 6. Troque os valores de duas variáveis usando destructuring.
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5

// 7. Destructure os parâmetros de uma função que recebe um objeto com nome e idade.
function mostrarPessoa({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}
mostrarPessoa({ nome: "Carlos", idade: 40 });

// 8. Use destructuring para extrair chaves e valores de um objeto dentro de uma função.
function mostrarObjeto(obj) {
  for (const [chave, valor] of Object.entries(obj)) {
    console.log(`${chave}: ${valor}`);
  }
}
mostrarObjeto({ linguagem: "JS", nivel: "Avançado" });

// 9. Extraia propriedades de um objeto e renomeie as variáveis usando destructuring.
const livro = { titulo: "1984", autor: "George Orwell" };
const { titulo: bookTitle, autor: bookAuthor } = livro;
console.log(bookTitle, bookAuthor); // 1984 George Orwell

// 10. Use destructuring para extrair elementos de um array retornado por uma função.
function retornaArray() {
  return ["banana", "maçã", "uva"];
}
const [fruta1, fruta2, fruta3] = retornaArray();
console.log(fruta1, fruta2, fruta3); // banana maçã uva
