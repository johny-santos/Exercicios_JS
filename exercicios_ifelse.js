/*
===========================================================
Exercícios Práticos - If/Else
===========================================================
*/

// 1. Crie uma variável idade. Se idade >= 18 exiba "Maior de idade", senão "Menor de idade".
var idade = 18
    if(idade >= 18){
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }

// 2. Crie uma variável hora. Se hora < 12 → "Bom dia", senão → "Boa tarde".
var hora = 12
    if(hora < 12 ){
        console.log("Bom dia!")
    }else{
        console.log("Boa tarde!")
    }

// 3. Crie uma variável nota. Se >= 7 → "Aprovado", senão → "Reprovado".
var nota = 7
    if(nota >= 7 ){
        console.log("Aprovado!")
    }else {
        console.log("Reprovado!")
    }

// 4. Crie uma variável temperatura. Se >= 30 → "Quente", se >= 20 → "Agradável", senão → "Frio".
var temperatura = 30 
    if(temperatura >= 30){
        console.log("Quente!")
    }else if(temperatura >= 20){
        console.log("Agradável!")
    }else{
        console.log("Frio!")
    }

// 5. Verifique se um número é par ou ímpar.
var numeroQualquer = 3
    if(numeroQualquer % 2 == 0 ) {
        console.log("Esse número é par!")
    }else{
        console.log("Esse número é ímpar!")
    }

// 6. Crie duas variáveis usuario e senha. Verifique se usuario == "admin" e senha == "123
var usuario = "admin"
var senha = "123"
    if(usuario == "admin" && senha == "123"){
        console.log("Você pode acessar o sistema!")
    }else{
        console.log("Você não tem permissão para logar no sistema!")
    }

// 7. Crie uma condição que só exiba mensagem se uma variável ativo == true.
var ativo = true
    if(ativo == true ){
        console.log("Está ativo!")
    }

// 8. Crie um programa que verifique se ano é bissexto (divisível por 4 e não por 100, ou divisível por 400).
var anoEmQuestao = 2028
    if((anoEmQuestao % 4 == 0 && anoEmQuestao % 100 != 0) || anoEmQuestao % 400 == 0){
        console.log("Esse ano é bissexto")
    }else {
        console.log("Esse ano NÃO é bissexto...")
    }


// 9. Peça para o aluno prever o resultado:
// let x = 5;
// if (x > 10) { console.log("Maior que 10"); }
// else if (x > 3) { console.log("Maior que 3"); }
// else { console.log("Outro caso"); }

// O RESULTADO SERÁ ELSE IF X > 3 MAIOR QUE 3


// 10. Crie um programa que receba 3 notas e calcule a média.
// Se média >= 7 → "Aprovado"
// Se média >= 5 → "Recuperação"
// Senão → "Reprovado".

var nota1 = 7
var nota2 = 5
var nota3 = 3
var media =  (nota1 + nota2 + nota3) / 3 
    if(media >= 7 ){
        console.log("Parabéns, você foi aprovado!")
    }else if(media >= 5) {
        console.log("Você está de recuperação. Estude mais para não ficar nessa situação ano que vem!")
    }else{
        console.log("Você está reprovado. Mais estudo durante o ano que vem para passar!")
    }

