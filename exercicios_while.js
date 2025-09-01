/*
===========================================================
Exercícios Práticos - While
===========================================================
*/

// 1. Use um while para imprimir números de 1 a 10.
var numero = 0
    while(numero < 10){
        numero++
        console.log(numero)
    }

// 2. Use um while para imprimir números pares até 20.
var numerosPares = 0
    while(numerosPares <= 20 ){
        if(numerosPares % 2 == 0){
            console.log(numerosPares)
        } 
        numerosPares++;
    }

// 3. Some números de 1 a 100 usando while.
var soma = 0
var contador = 1
    while(contador <= 100){
      soma = soma + contador
      contador++
    }
    console.log(soma);

// 4. Crie um while que conte de 10 até 1.
var aributo = 10
    while(aributo > 1){
       aributo = aributo - 1

       console.log(aributo);
    }
    //console.log(aributo);

// 5. Crie um while que peça senha até ser igual a "1234".
var senha = "";
while (senha !== "kitano") {
    senha = prompt("Digite a senha:"); // aqui atualizamos a variável
    if (senha !== "kitano") {
        console.log("Senha incorreta, digite a senha válida!");
    }
}
console.log("Senha correta!");

// 6. Crie um while que calcule a tabuada do 5.
var interator = 0
var numeroMultiplicacao = 5
var resultado 
    while(interator !== 10 ){
       resultado = numeroMultiplicacao * interator
       console.log(`${numeroMultiplicacao} X ${interator} = ${resultado}`)

       interator++
    }


// 7. Crie um while que exiba os caracteres da string "JavaScript".
var estringue = "JavaScript";
var Z = 0
    while( Z < estringue.length){
        console.log(estringue[Z])
        Z++
    }

// 8. Use while para calcular o fatorial de 5.
var fatorial = 1
var contador = 5
    while(contador > 1){
        fatorial = fatorial * contador
        console.log(fatorial)
        contador--
    }

// 9. Peça para o aluno prever o resultado:
// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++;
// } //Ele vai imprimir até o 2

// 10. Crie um while que só termina quando um número aleatório for 7.
var numeroAleatorio = 4;

while (numeroAleatorio !== 7) {
  numeroAleatorio = Math.floor(Math.random() * 10); 
  console.log("Número gerado:", numeroAleatorio);
}
