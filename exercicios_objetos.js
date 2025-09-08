/*
===========================================================
Exercícios Práticos - Objetos
===========================================================
*/

// 1. Crie um objeto com 3 propriedades diferentes e exiba-o.
const teclado = {
    nome: "Yamaha PSR-SX 600",
    Botoes: +100,
    resgistros: 500
}
console.log(teclado);

// 2. Acesse e exiba uma propriedade usando notação de ponto e colchetes.
console.log(teclado.nome)
console.log(teclado["resgistros"]) //Pra chamar com os colchetes você ainda precisa colocar em strings;

// 3. Adicione uma nova propriedade ao objeto depois de criado.
const livro = {
    nome: "Lógica de programação",
    autor: "Xavier",
    Quantidade_de_páginas: +100, 
}
livro.operadores = "Aritméticos e Lógicos"; //Primeiro passa o nome do objeto e em seguida o nome da propriedade que deseja colocar!
console.log(livro);

// 4. Remova uma propriedade do objeto.
const cama = {
    acessórios: "molas",
    principal: "Colção"
}
delete cama.principal //Você deve colocar o delete isolado e depois acesar o nome do objeto com a propriedade que você quer apagar!
console.log(cama); //Tipo SQL

// 5. Adicione um método que retorne uma string usando propriedades do objeto.
const violao = {
    tem: "cordas",
    qtd: 6,
    descricao: function() {
        return `Esse instumrneto têm ${this.qtd} ${this.tem} !`
    }
}
console.log(violao.descricao());

// 6. Crie um objeto aninhado (objeto dentro de objeto) e exiba um valor interno.
const Biblioteca = {
    Estantes: {
        livros: "O poder do hábito",
        Pratileira: "Arquivos e documentos",
    },
    energia: {
        iluminacao: "Luz elétrica",
        itens: "computadores",
    },
    bancadas: "Mesas",
};
console.log(Biblioteca.Estantes.livros)
console.log(Biblioteca.energia.itens)

// 7. Itere sobre as propriedades do objeto e exiba cada par nome/valor.
const apartamento = {
    comodos: "Salas, quartos, ambientes de lazer...",
    locomocao: "Elevadores, escadas",
    itens: "Mobíia e etc..."
}
for(let chave in apartamento){
    console.log(`${chave}: ${apartamento[chave]}`)
}
console.log(Object.keys(apartamento))
console.log(Object.values(apartamento))
console.log(Object.entries(apartamento))

// 8. Clone um objeto usando spread e altere uma propriedade no clone.
const carro = {
    marca: "Honda",
    modelo: "Civic",
    Categoria: "hatchback",
}
const carroAtualizado = {...carro}
carroAtualizado.Categoria = "Sedan"
console.log(carro, carroAtualizado)

// 9. Compare dois objetos com mesmo conteúdo e explique o resultado da comparação.
const nomePadrao = {nome: "joão"}
const nomePadrao2 = {nome: "joão"}

console.log(nomePadrao === nomePadrao2)
console.log(JSON.stringify(nomePadrao) == JSON.stringify(nomePadrao2))

// 10. Congele um objeto com Object.freeze e tente alterar uma propriedade.
const casa = {
    grades: "Portão",
    entradas: "Portas",
    estruturas: "Paredes, muros e vigas"
}
Object.freeze(casa) //Congelamento SUPERFICIAL e não PROFUNDO
casa.decoracao = "pintura";
console.log(casa)
