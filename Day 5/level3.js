//1. 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()
console.log(ages)
console.log(`The min age is ${ages[0]}\nThe max age is ${ages[ages.length-1]}`)

even = ages.length%2
even 
    ? console.log(`The median age = ${ages[(ages.length-1)/2]}`)
    : position = ages.length/2
    let median = (ages[position]+ages[position+1])/2
    console.log(`the median age = ${median}`)

console.log((ages.reduce((a,b) => a + b, 0))/ages.length)

console.log(`The range is ${ages[ages.length-1]-ages[0]}`)

//2.
console.log(countries.slice(0,10))

even = countries.length%2
let positionEven = countries.length/2
let positionOdd = (countries.length-1)/2

even
    ? console.log(`The middle country is ${countries[(countries.length-1)/2]}`)
    : console.log(`The middle two countries are ${countries[positionEven]} and ${countries[positionEven +1]}`)

    even
    ? secondHalf=countries.splice(positionOdd+1, positionOdd)
    : console.log('placeholder')

console.log(countries)
console.log(secondHalf)