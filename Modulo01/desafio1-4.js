// Desafios para fortalecer alguns conceitos, entre eles:

// Booleanos;
// Organização;
// Padronização;
// Escrita.
// Intro
// Crie um programa para realizar operações bancárias na conta de um usuário.

// Comece criando um objeto com o nome do usuário, suas transações e saldo.

// As transações (transactions) devem iniciar como um array vazio [] e o saldo (balance) em 0 (zero).

const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};


// Adicionar transações
// Crie uma função createTransaction para adicionar 
// uma nova transação no array de transações de um usuário, 
// essa função deve receber como parâmetro um objeto de transação 
//que tem o seguinte formato:


function createTransaction(transaction){
    if(transaction.type=='credit'){
        user.balance += transaction.value
    } else {
        user.balance -= transaction.value
    }
    user.transactions.push(transaction)
}


// Relatórios
// Crie uma função chamada getHigherTransactionByType 
// que recebe como parâmetro o tipo de transação credit/debit, 
// percorre as transações do usuário e retorna o objeto da transação 
// de maior valor com aquele tipo:

 function getHigherTransactionByType (type){
    biggestTransaction = {value:-1}

    for (transaction of user.transactions){
        if(transaction.type == type & transaction.value > biggestTransaction.value)
            biggestTransaction = {type: transaction.type, value: transaction.value}
    }

    console.log (biggestTransaction)
    return biggestTransaction
}

// Crie uma função chamada getAverageTransactionValue
// que retorna o valor médio das transações de um usuário 
// independente do seu tipo:

function getAverageTransactionValue(){
    let sum = 0
    for(transaction of user.transactions){
        sum += transaction.value
    }

    console.log('Average: ', sum/user.transactions.length)
    return (sum/user.transactions.length)
}


// Crie uma função chamada getTransactionsCount 
// que retorna o número de transações de cada tipo credit/debit, 
// o retorno da função deve ser um objeto e seguir exatamente
//  como o modelo apresentado abaixo:

// getTransactionsCount(); // { credit: 5, debit: 3 }

function getTransactionsCount(){
    transactionCount={credit: 0, debit: 0}

    for (transaction of user.transactions){
        if (transaction.type=='credit'){
            transactionCount.credit += 1;
        } else{
            transactionCount.debit +=1;
        }
    }
    console.log('Transaction Count',transactionCount)
    return transactionCount;
}


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }