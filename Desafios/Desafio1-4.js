const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  }

function createTransaction (transaction){
    user.transactions.push(transaction)
    updateBalance (transaction.type,transaction.value)
}

function updateBalance (type,value){
    if(type == 'credit'){
        user.balance = user.balance + value
    }
    else{
        user.balance = user.balance - value
    }
}

function  getHigherTransactionByType(transactionType){
    let higher = {value:0}

    for (const transaction of user.transactions) {
        if(higher.value<transaction.value && transactionType==transaction.type){
            higher = transaction
        }
    }

    return higher
}

function getAverageTransactionValue(){
    let sum = 0

    for (let transaction of user.transactions) {
        sum = sum + transaction.value
    }    

    return sum/user.transactions.length
}

function getTransactionsCount(){
    let count = {
        credit: 0,
        debit: 0,
    }

    for (let transaction of user.transactions){
        if(transaction.type === 'credit'){
            count.credit++
        }
        else{
            count.debit++
        }
    }

    return count
}


createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

console.log(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()) // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }