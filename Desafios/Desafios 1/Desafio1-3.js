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


function buscarCSS (programador){
    for (let i=0;i<programador.tecnologias.length;i++){
        if(programador.tecnologias[i]=="CSS"){
            return true
        }
    }
    return false
}

function buscarProgramadorCSS (programador){

    for(let i=0; i<programador.length;i++){

        if (buscarCSS(programador[i])){
            console.log(`O usuário ${programador[i].nome} trabalha com CSS`)
        }
    }
    
}

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