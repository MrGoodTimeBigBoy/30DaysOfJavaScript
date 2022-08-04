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
    }
}

console.log(personAccount.totalIncome())