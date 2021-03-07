// Desafio para fortalecer conceitos: Objetos e Vetores

/* Construção e impressão de Objetos

Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:
- Nome: Rocketseat
- Cor: Roxo
- Foco: Programação
- Endereço:
- Rua: Rua Guilherme Gembala
- Número: 260
Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados*/ 

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco:{
        rua:"Rua Guilherme Gembala",
        numero:260,
    }
}

//Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:

console.log (`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

/* Vetores e objetos

Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.
As tecnologias também devem ser objetos contendo nome e especialidade. */

const programador = {
    nome: "Ian",
    idade: 28,
    tecnologias: [
        {
            nome: "JavaScript",
            especialidade: "Web/Mobile"
        },
        {
            nome: "HTML5",
            especialidade: "Web/Mobile"
        }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
