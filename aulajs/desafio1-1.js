// Desafios para fortalecer alguns conceitos, entre eles:

// Variáveis;
// Condicionais;
// Operadores.

// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

// Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:

// const nome = "Carlos";
// const peso = 200;
// const altura = 1.88;

// const imc = peso/(altura*altura);

// // Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

// // SE o IMC maior ou igual a 30: Carlos você está acima do peso;
// // SE o IMC menor que 29.9: Carlos você não está acima do peso;

// if (imc >= 30){
//     console.log(`${nome} você está acima do peso, mas está tudo bem! Acompanhe sua saúde com um médico e um bom nutricionita. IMC sozinho não quer dizer nada :)`)
// } else {
//     console.log(`${nome}, você não está acima do peso. Mas isso não quer dizer nada! Acompanhe sua saúde com um médico e um bom nutricionista.`)
// }


// Cálculo de aposentadoria

// Crie um programa para calcular a aposentadoria de uma pessoa.

// Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

// Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:

const nome = "Silvana";
const sexo = "F";
const idade = 42;
const contribuicao = 50;

// Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
// Com base nas regras acima imprima na tela as mensagens:

// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

if(sexo=='F' & idade+contribuicao>= 85 | sexo=='M' & idade+contribuicao>=95){
    console.log(`${nome}, você pode se aposentar!`, idade+contribuicao)
} else {
        console.log(`${nome}, você ainda não pode se aposentar!`, idade+contribuicao)
}
