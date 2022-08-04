const personAccount = {
    firstName: 'Belon',
    lastName: 'Busk',
    incomes: [
        3000000,
        4.99
    ],
    expenses:[
        4000000,
        12.99
    ],
    totalIncome: function() {
        let sumIncome = 0
        for (source of this.incomes){
            sumIncome+=source
        }
        return sumIncome
    },
    totalExpense: function(){
        let sumExpense = 0
        for (source of this.expenses){
            sumExpense+=source
        }
        return sumExpense
    },
    accountInfo: function(){
        return `This account belongs to ${this.firstName} ${this.lastName}.`
    },
    addIncome: function(amount){
        this.incomes.push(amount)
    },
    addExpense: function(amount){
        this.expenses.push(amount)
    },
    accountBalance: function(){
        return this.totalIncome()-this.totalExpense()
    }
}

console.log(personAccount.totalIncome())
console.log(personAccount.totalExpense())
console.log(personAccount.accountInfo())
console.log(personAccount.accountBalance())
personAccount.addExpense(400)
console.log(personAccount.accountBalance())

//2

