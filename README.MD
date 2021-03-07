# Domingo

Hora de Início: 16h
Hora de Término: 18h

# Check-list

- [x]  08'18" Preparando Ambiente Windows
- [x]  06'34" Iniciando com a programação web
- [x]  05'16" Iniciando no JavaScript
- [x]  05'13" Comentários, Strings e Numbers
- [x]  02'25" Fazendo cálculos com JavaScript
- [x]  05'04" Condicionais
- [x]  07'13" Operadores relacionais e comparativos
- [x]  08'01" Operadores lógicos e aritméticos
- [x]  20'00" Desafio 1-1
- [ ]  05'00" Atualizar repositório

# O que aprendi?

## Preparando Ambiente Windows

- Utilizar Chocolatey para instalar: VSCode, NodeJs e Chrome
- Passo-a-passo: [Windows.md (github.com)](https://gist.github.com/maykbrito/1bb488966fa48fe016ef742321022b10)

## Iniciando com a programação web

- Programação é ensinar o computador através de algoritmos (conjunto de regras)
- A linguagem de programação é definida a partir do tipo de aplicativo que deseja.
- A vantagem do JS é que ele se enquadra em qualquer tipo de aplicativo (Desktop / Web / Mobile)
- JS é uma linguagem:
    - Moderna
    - Grande comunidade
    - Muito popular
    - Está em todos os lugares (Airbnb, Instagram, Facebook etc)
    - Fácil de escrever e aprender

## Iniciando no JavaScript

- Criar arquivo .js no VSCode
- Variável **const** não aceita edições posteriores
- Ponto e vírgula no JS é facultativo

### Executando JS no Chrome

- Abrir chrome > apertar F12 > Console

```jsx
const nome = 'Ian'
console.log(nome)
```

### Executando JS no NodeJs

- No terminal do VSCode, navegar até a pasta que o arquivo JS está salvo

```jsx
cd Users/ianpr/Rocketseat
node index.js
```

## Comentários, Strings e Numbers

```jsx
**Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média**

const aluno01 = 'Ian'
const aluno02 = 'Diego'
const aluno03 = 'Mayk'
const notaAluno01 = 9.8
const notaAluno02 = 10
const notaAluno03 = 2

console.log (typeof notaAluno01)

```

## Fazendo cálculos com JavaScript

```jsx
const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3
console.log (media)
```

## Condicionais

```jsx
// Se a média for maior que 5, parabenizar a turma

if (media>5){
    console.log(`A média foi de ${media}. Parabéns!`)
} else {
    console.log('A média foi menor que 5')
}
```

## Operadores relacionais e comparativos

**Operadores de comparação**
> Maior
< Menor
>= Maior igual
<= Menor igual
== Igual
=== Igual e do mesmo tipo
!= Diferente
!== Diferente, inclusive do tipo

**Operadores lógicos**
&& "E" - Duas condições verdadeiras
|| "OU" - Uma condição verdadeira
! "Não" - Nega a expressão

**Operadores Aritméticos
*** Multiplicação
/ Divisão
% Resto da divisão
+ Adição
- Subtração

# Desafio

[Link]()

### Cálculo IMC

Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

```jsx
const nome = "Ian";
const peso = 77;
const altura = 1.57;

const imc = peso/(altura*altura);

if (imc >=30){
    console.log(`${nome} você está acima do peso. Seu IMC é ${imc}`)
} else{
    console.log(`${nome} você não está acima do peso. Seu IMC é ${imc}`)
}
```

### Cálculo de aposentadoria

Crie um programa para calcular a aposentadoria de uma pessoa.

*Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)*

```jsx
const nome = "Ian"
const sexo = "M"
const idade = 28
const contribuicao = 10

// O tempo de contribuição mínimo para homens é de 35 anos e, 
// para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo 
// de contribuição do homem precisa ser de no mínimo 95 anos, 
// enquanto a mulher precisa ter no mínimo 85 anos na soma;

const minimo = idade + contribuicao

const homemPodeAposentar = sexo =='M' && contribuicao >=35 && minimo >= 95
const mulherPodeAposentar = sexo =='F' && contribuicao >=30 && minimo >= 85

if (homemPodeAposentar||mulherPodeAposentar){
    console.log(`${nome} você pode se aposentar`)
} else {
    console.log(`${nome} você não pode se aposentar`)
}
```
