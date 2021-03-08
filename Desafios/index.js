//Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média


const alunosDaTurmaA = [
    {
        nome:"Ian",
        nota:9.8
    },
    {
        nome: 'Diego', 
        nota: 10
    },
    {
        nome: 'Mayk', 
        nota: 2
    }
]

const alunosDaTurmaB = [
    {
        nome:"João",
        nota:3
    },
    {
        nome: 'Marcelo', 
        nota: 5
    },
    {
        nome: 'Paulo', 
        nota: 2
    },
    {
        nome: 'Novo Aluno', 
        nota: 10
    }
]

function calculaMedia(alunos){
    let soma = 0
    for (let i=0; i<alunos.length; i++){
        soma = soma + alunos[i].nota
    }
    const media = soma/alunos.length
    return media
}

// Se a média for maior que 5, parabenizar a turma

function enviaMensagem(media, turma){
    if (media>5){
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
    } else {
        console.log(`A média da ${turma} foi menor que 5`)
    }    
}


const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')


