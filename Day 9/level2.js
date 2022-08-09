//1
const priceSum = products.map((item) => item.price).filter((item) => typeof item == 'number').reduce((acc,cur) => acc + cur, 0)
console.log(priceSum)

//2
const priceSumReduce = products.reduce((acc,cur) => acc + isPrice(cur.price),0)
console.log(priceSumReduce)

function isPrice(input){
    let value = input
    if (typeof input != 'number'){
        value = 0
    }
    return value
}

//3

function categorizeCountries(array){
    const stanArray = array.filter((country) => country.name.endsWith('stan'))
    return stanArray
}

console.log(categorizeCountries(countriesAll))

//4
const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const letterCountries = letters.map((letter) => createObject(letter))

function createObject(input){
    const count = countriesAll.filter((country)=> country.name.startsWith(input))
    const outputObject = {
        Letter: input,
        Occurances: count.length
    }
    return outputObject
}

console.log(letterCountries)

//5

function getFirstTenCountries (array){
    const outputArray = []
    for (i=0; i<10; i++){
        outputArray.push(array[i])
    }
    return outputArray
}

console.log(getFirstTenCountries(countriesAll))

//6

function getLastTenCountries (array){
    const outputArray = []
    for (i=10; i>0; i--){
        outputArray.push(array[array.length-i])
    }
    return outputArray
}

console.log(getLastTenCountries(countriesAll))

//7

const mostUsed = array => {
    const lettersSorted = letterCountries.sort((a,b) => {
        if (a.Occurances < b.Occurances) return 1
        if (a.Occurances > b.Occurances) return -1
        return 0
    })
    return `The most used initial was ${lettersSorted[0].Letter} with ${lettersSorted[0].Occurances} occurances`
}

console.log(mostUsed())