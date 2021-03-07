/* Desafio para fortalecer conceitos de: Variáveis; Condicionais; Operadores */

//Cálculo IMC
//Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = "Ian";
const peso = 77;
const altura = 1.57;

const imc = peso/(altura*altura);

if (imc >=30){
    console.log(`${nome} você está acima do peso. Seu IMC é ${imc}`)
} else{
    console.log(`${nome} você não está acima do peso. Seu IMC é ${imc}`)
}


const nome = "Ian"
const sexo = "M"
const idade = 28
const contribuicao = 10

// Cálculo de aposentadoria
// Crie um programa para calcular a aposentadoria de uma pessoa.

//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

const minimo = idade + contribuicao

const homemPodeAposentar = sexo =='M' && contribuicao >=35 && minimo >= 95
const mulherPodeAposentar = sexo =='F' && contribuicao >=30 && minimo >= 85

if (homemPodeAposentar||mulherPodeAposentar){
    console.log(`${nome} você pode se aposentar`)
} else {
    console.log(`${nome} você não pode se aposentar`)
}


