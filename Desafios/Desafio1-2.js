const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco:{
        rua:"Rua Guilherme Gembala",
        numero:260,
    }
}

console.log (`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

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