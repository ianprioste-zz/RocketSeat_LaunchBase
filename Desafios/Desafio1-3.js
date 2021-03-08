/* Desafios para fortalecer alguns conceitos, entre eles:

Funções e métodos;
Estruturas de repetição;
Escopos.


Usuários e tecnologias

Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array):
*/

const programadores = [
    {nome:"Ian",tecnologias:["HTML","CSS","JavaScript"]},
    {nome:"Jasmine",tecnologias:["JavaScript","CSS"]},
    {nome:"Tuane",tecnologias:["HTML","Node.js"]},
]

function imprimirProgramadores (programadores){
    for (let i = 0; i<programadores.length; i++){
        console.log(`${programadores[i].nome} trabalha com ${programadores[i].tecnologias}`)
    }
}

// imprimirProgramadores(programadores)

/* Busca por tecnologia
Baseado no desafio anterior, utilize a mesma lista de usuários construída.

Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. 
Essa função deve retornar um boolean true/false.
*/

function buscarCSS (programador){
    for (let i=0;i<programador.tecnologias.length;i++){
        if(programador.tecnologias[i]=="CSS"){
            return true
        }
    }
    return false
}

//Percorra o array de usuários e, para cada um, verifique se o mesmo 
//trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:

function buscarProgramadorCSS (programador){

    for(let i=0; i<programador.length;i++){

        if (buscarCSS(programador[i])){
            console.log(`O usuário ${programador[i].nome} trabalha com CSS`)
        }
    }
    
}

/*
Soma de despesas e receitas
Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).
*/

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

  // Percorra o array de usuários e para cada usuário chame uma função chamada 
  // calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:

/*function calculaSaldo(receitas, despesas){
    let positivo = 0
    let negativo = 0
    for (let i=0;i<receitas.length;i++){
        positivo = positivo + receitas[i]
    }
    for (let j=0;j<despesas.length;j++){
        negativo = negativo + despesas[j]
    }

    return positivo-negativo
}
*/

function saldo (usuarios){
    let saldo = 0
    for (usuario of usuarios) {
        saldo = calculaSaldo(usuarios[i].receitas,usuarios[i].despesas)
        if (saldo>0){
            console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo}`)     
        } else {
            console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}`)
        }
    }
}

// Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles 
// e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

function somaNumeros (numeros){
    let soma = 0
    for (numero of numeros) {
        soma = soma + numeros[i]
    }
    return soma
}

function calculaSaldo(receitas, despesas){
    return somaNumeros(receitas)-somaNumeros(despesas)
}

saldo(usuarios)