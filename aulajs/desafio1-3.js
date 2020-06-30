// // Desafios para fortalecer alguns conceitos, entre eles:

// // Funções e métodos;
// // Estruturas de repetição;
// // Escopos.
// // Usuários e tecnologias
// // Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

// // const usuarios = [
// //   { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
// //   { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
// //   { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
// // ];
// // Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

// // Carlos trabalha com HTML, CSS
// // Jarmine trabalha com JavaScript, CSS
// // Tuane trabalha com HTML, Node.js

// const usuarios = [
//     { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
//     { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
//     { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
// ]

// for (usuario of usuarios){
//     console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
// }

// // Busca por tecnologia
// // Baseado no desafio anterior, utilize a mesma lista de usuários construída.

// // Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

// function checaSeUsuarioUsaCSS(usuario) {
//     for(tecnologia of usuario.tecnologias){
//         if(tecnologia==="CSS"){
//             return true
//         } 
//     } return false
// }

// // Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:

// for (usuario of usuarios){
//     const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario)

//     if (usuarioTrabalhaComCSS){
//         console.log(`O usuário ${usuario.nome} trabalha com CSS`)
//     }
// }

// // Soma de despesas e receitas
// // Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).

// // Utilize o array de usuários abaixo:

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];


// Percorra o array de usuários e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:


function calculaSaldo(receitas, despesas) {
    return somaNumeros(receitas)-somaNumeros(despesas)
}

function somaNumeros(numeros){
    let total = 0
    for (numero of numeros){
        total = total + numero
    }

    return total
}

function imprimirSaldos(usuarios){
    for (usuario of usuarios){
        let tipo = "POSITIVO"

        let saldo = calculaSaldo(usuario.receitas,usuario.despesas)

        if (saldo < 0)
            tipo = "NEGATIVO"


        console.log (`${usuario.nome} possui o ${tipo} de ${saldo}`)

    }
}

imprimirSaldos(usuarios)