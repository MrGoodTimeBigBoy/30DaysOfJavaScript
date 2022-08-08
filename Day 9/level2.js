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

