class Statistics {
    constructor(input) {
        this.data = input
    }
    count() {
        return this.data.length
    }
    sum() {
        return this.data.reduce((acc,cur) => acc+cur, 0)
    }
    min(){
        return ages.sort()[0]
    }
    max(){
        return ages.sort()[ages.length-1]
    }
    range(){
        return this.max() - this.min()
    }
    mean(){
        return parseInt(this.sum()/this.count())
    }
    median(){
        let amount = 0
        if (this.count()%2){
            amount = ages.sort()[(this.count()-1)/2]
        } else {
            amount = (ages.sort()[this.count()/2] + ages.sort()[this.count()/2 + 1])/2
        }
        return amount
    }
    mode(){
        const modeData = []
        ages.forEach((num) => {
            const agesCopy = [...ages]
            const modeCount = agesCopy.filter((entry) => entry==num).length
            const outputArray = {
                mode: num,
                count: modeCount
            }
            modeData.push(outputArray)
        })
        modeData.sort((a,b) => {
            if (a.count < b.count) return 1
            if (a.count > b.count) return -1
            return 0
        })
        console.log(modeData)
        return modeData[0]
    }
    var(){
        const varArray = ages.map((item) => (item - this.mean())**2)
        return varArray.reduce((acc,cur) => acc+cur, 0)/this.count()
    }
    std(){
        return Math.sqrt(this.var())
    }
    freqDist(){
        const freqDistData = []
        ages.forEach((num => {
            const agesCopy = [...ages]
            const freqCount = agesCopy.filter((entry) => entry==num).length
            const outputArray = [ (freqCount/this.count()*100),num]
            if (freqDistData.some((item) => item[1]==num)){
            } else {freqDistData.push(outputArray)
            }
        }))
        freqDistData.sort((a,b) => {
            if (a[0] < b[0]) return 1
            if (a[0] > b[0]) return -1
            return 0
        })
        freqDistData.map((item) => {
            item[0] = item[0].toFixed(1)
        })
        
        return freqDistData
    }
}



ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages)

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

class PersonAccount {
    constructor(firstName, lastName, incomes, expenses) {
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = incomes
        this.expenses = expenses
    }
    totalIncome() {
        return this.incomes.reduce((acc,cur)=>acc+cur, 0)
    }
}

const account1 = new PersonAccount('Ian','Burrows',[30000,14.87],[2000,7.12])
console.log(account1.totalIncome())