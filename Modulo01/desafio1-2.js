// Desafios para fortalecer alguns conceitos, entre eles:

// Objetos;
// Vetores.
// Construção e impressão de objetos
// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

// Nome: Rocketseat

// Cor: Roxo

// Foco: Programação

// Endereço:

// Rua: Rua Guilherme Gembala
// Número: 260
// Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados, por exemplo:

// const usuario = {
//     nome: "Diego",
//     empresa: {
//       nome: "Rocketseat"
//     }
//   };

const empresas = [
    {
        nome: "Rocketseat",
        cor: "Roxo",
        foco: "Programação",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }
    }
] 

//Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:


console.log(`A empresa ${empresas[0].nome} está localizada em ${empresas[0].endereco.rua}, ${empresas[0].endereco.numero}`)


// Vetores e objetos
// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

// { nome: 'C++', especialidade: 'Desktop' }
// { nome: 'Python', especialidade: 'Data Science' }
// { nome: 'JavaScript', especialidade: 'Web/Mobile' }

const programadores = [{
    nome: 'Carlos',
    idade: 32,
    especialidades: [{
        tecnologia: "C++",
        especialidade:"Desktop"
    },
    {
        tecnologia: "JavaScript", 
        especialidade: "Web/Mobile"
    }
    ]
}
]

console.log(`O usuário ${programadores[0].nome} tem ${programadores[0].idade} e usa a tecnologia ${programadores[0].especialidades[0].tecnologia} com especialidade em ${programadores[0].especialidades[0].especialidade}`)

