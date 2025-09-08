/*
===========================================================
Exercícios Práticos - Funções
===========================================================
*/

// 1. Crie uma função tradicional que receba dois números e retorne a soma.
function somarTudo(a,b){
 soma = a + b
return soma
}
console.log(somarTudo(10,20))

// 2. Crie uma função de seta (arrow function) que receba uma string e retorne ela em maiúsculas.
let palavraString = "rodeio";
const palavraMaiuscula = palavra => palavra.toUpperCase()
console.log(palavraMaiuscula(palavraString)); 

// 3. Crie uma função que recebe um parâmetro opcional com valor padrão e retorne uma saudação.
function receberOpcional(nome = "usuário"){
    return `Olá ${nome}, saudações! Como você está?`
}
//console.log(receberOpcional())
console.log(receberOpcional("johny"))

// 4. Crie uma função que receba um número indefinido de argumentos e retorne a média deles.
function media(...numeros) {
  let soma = 0;
  for (let n of numeros) {
    soma += n;                  //...decepção total
  }
  return soma / numeros.length;
}
console.log(media(10, 20, 30)); 

// 5. Crie uma função que retorna outra função que adiciona um número fixo.
function primaria() {
    let numeroEspecifico = 24;

    return function(numero) {
        return numeroEspecifico + numero;
    }
}             // Quase consegui

const adicionar24 = primaria(); 

console.log(adicionar24(2));   // 26
console.log(adicionar24(10));  // 34
console.log(adicionar24(100)); // 124

// 6. Escreva uma IIFE que imprima "Função autoexecutada".
(function(){
    console.log("Função autoexecutada!")
}) ();

// 7. Crie uma função que usa `this` e explique a diferença entre função tradicional e arrow function no contexto do `this`.
const johny = {
    nome: "JOHNY",
    gritar: function() {
        console.log(`MEU NOME É ${this.nome} !`);
    },
}
johny.gritar()  
/*
A grande questão é que as função normais podem usar esse this
Agora as arrows functions não têm seu próprio this, se você tentar utilizar vai retornar undefined;
*/

// 8. Crie uma função que recebe um objeto e imprime seus valores usando destructuring.
function imprimirValores(obj) {
    // Destructuring: pega as propriedades do objeto
    const { nome, idade, cidade } = obj;
    console.log(nome, idade, cidade);
}

const pessoa = { nome: "Johny", idade: 19, cidade: "Porto Seguro" };
imprimirValores(pessoa); // Johny 19 Porto Seguro

// 9. Crie uma função que troca os valores de duas variáveis usando destructuring.
function trocarValores(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

let x = 5, y = 10;
[x, y] = trocarValores(x, y);
console.log(x, y); // 10 5

// 10. Crie uma função recursiva que calcula o fatorial de um número.
function fatorial(n) {
    if (n === 0 || n === 1) return 1; // caso base
    return n * fatorial(n - 1);       // chamada recursiva
}

console.log(fatorial(5)); // 120
console.log(fatorial(0)); // 1
