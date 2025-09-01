/*
===========================================================
Exercícios Práticos - For
===========================================================
*/

// 1. Use um for para imprimir números de 1 a 10.
for(var i = 1; i <= 10; i++){  //Inicio a variável e passo uma condição de prada para ela junto do incremento...
    console.log(i)    //Exibe no console
}

// 2. Use um for para imprimir números pares de 0 a 20.
for(let i = 0; i <= 20; i++){ // Não funciona a verificação de par no () do for
    if(i % 2 == 0){  // Para essa verificação, criamos uma exclusiva para ela dentro da condição
        console.log(i) //Depois imprime
    }  
}

// 3. Use um for para imprimir números ímpares de 1 a 15.
for(let i = 1; i <= 15; i++){
    if(i % 2 == 1){
        console.log(i)
    }   
}

// 4. Calcule a soma dos números de 1 a 100 usando for.
let soma = 0; // começa com zero

for (let i = 1; i <= 100; i++) {
    soma = soma + i; // cada vez soma o i atual
}

console.log(soma); // mostra o resultado final
/* 
Esse exercício eu penei bem mais par fazer, e ainda fiz errado. Meu principal erro foi não ter visto que precisaria 
de uma variável para guardar o valor de cada soma durante a rolagem do for. 

Outra coisa, foi chamar o console dentro do escopo do for, isso deu um erro que não tava mostrando a soma
que o exercício pedia. Enfim me lasquei nesse exercício.
*/

// 5. Crie um array com 5 frutas e percorra com for exibindo cada uma.
frutas = ["Maça", "Banana", "Abacate", "Romã", "Abacaxi"]

for(let i = 0; i <= frutas.length ; i++){
    console.log(frutas[i])
}
 /*
 Aqui também deu merda, pelo fato de eu não ter tido o cuidado de saber que precisaria usar o lenght da lista
 no For() para o controle. 
 Me surpreendeu também a exibição com o i.
 */ 


// 6. Crie um for que mostre a tabuada do 7.
var numeroMultiplicado = 7
for(let i = 0; i <= 10; i++){
let resultado 

   resultado = numeroMultiplicado * i 
   console.log(`${numeroMultiplicado} X ${i} = ${resultado}`) // Uso de template Strings é mais moderno e agiliza o processo
}
/*
Meu problema nesse exercício foi porque eu queria enfeitar demais a saída... Aí acabou que me tomou tempo, pois eu criei
Uma variável que fica responsável por receber a tabuada na qual o usuário quer... Mas deu certo no final.

*/

// 7. Use um for para percorrer uma string e exibir cada caractere.
var palavra = "Superação";
for(let i = 0; i <= palavra.length -1; i++){
    console.log(palavra[i])
}

/*
Meu erro aqui foi a falta de atenção... Quase consegui. Os potos que me pegaram foram os -1 e a palavra[i]
estava colocando apenas o i esperando que funcionasse, porém quado você faz isso, ele te dá o valor do ÍNDICE
não da letra, que era o que e o exercício pedia...

Quando eu passo o nome da variável, nesse caso palavra, e passo o [i] relativo ao índice, ele me retorna todas as letras
em uma linha, pois ai ele já acessa o conteúdo da variável palavra, é como se palavra virasse um parâmetro de retorno, muito top.

*/

// 8. Use um for decrescente para contar de 10 até 1.
for(let i = 10; i >= 1; i--){
    console.log(i)
}
/*
Aqui eu vacilei na questão do sinal... Enquanto for I MAIOR OU IGUAL a 1..............
*/


// 9. Peça para o aluno prever o resultado:
// for (let i = 0; i < 5; i++){
//   console.log("i =", i);
// } // Vai dar 4, parando antes de 5


// 10. Crie um for que calcule o fatorial de 5.
var fatorial = 1
for(let i = 1; i <= 5; i++){
    fatorial = fatorial * i
    console.log(fatorial)
}
