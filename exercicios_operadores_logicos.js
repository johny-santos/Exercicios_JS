/*
===========================================================
Exercícios Práticos - Operadores Lógicos
===========================================================
*/

// 1. Crie p = true e q = false. Exiba p && q.
p = true
q = false

console.log(p && q);

// 2. Exiba p || q.
p = true
q = false

console.log(p || q);

// 3. Exiba !p e !q.
p = true
q = false

console.log(!p)
console.log(!q)

// 4. Verifique se idade > 18 E temCarteira == true.
var idade = 17
var carteira = true
if(idade >= 18 && carteira == true){
    console.log("Parabéns, você já pode dirigir!")
} else{
    console.log("Sinto muito, não foi dessa vez...")
}

// 5. Use || para definir um valor padrão se uma variável for undefined.
var carteira = false
var carro 

var podeDirigir = carteira || carro || "Não está apto a dirigir então!"
console.log(podeDirigir)

// 6. Teste (5 > 3 && 10 < 20).
teste = 5 > 3 && 10 < 20

console.log(teste)

// 7. Teste (false || (true && true)).
teste2 = (false || (true && true))

console.log(teste2) // Basta um dos lados ser verdadeiro

// 8. Crie um if que só roda se usuario == "admin" E senha == "1234".

usuario = "carlos";
senha = "0045";

if (usuario == "admin" && senha == 1234 ){
    console.log("Parabéns, você está apto a acessar esse programa!")
}else {
    console.log("Usuário ou senha errados. Digite o usuario e a senha correta ou será deportado do sistema!")
}

// 9. Crie uma expressão com !(nota >= 7).
var notaFinal = 7

console.log(!(notaFinal>=7))
//Se a nota for menor que 7 o resultado será true(NÃO PASSOU)
//Se a nota for maior que 7 o resultado será false(Passou)


// 10. Peça para o aluno prever o resultado de:
let x = false, y = true, z = false;
console.log(x || y && !z); // O OPERADOR && TEM PRECEDÊNCIA SOBRE O || (or)
// Vai retornar um true