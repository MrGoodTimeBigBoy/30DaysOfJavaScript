const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]

//1
/*
forEach : calls a function for each element of an array
map: performs a function on each element of an array and returns an array
filter: returns an array of elements that meet a parameter
reduce: performs a callback funtion on elements on an array,  returning one value
*/


//3
countries.forEach((country) => console.log(country.toLowerCase()))

//4
names.forEach((name) => console.log(name))

//5
numbers.forEach((number) => console.log(number))

//6
const countriesUpper = countries.map((country) => country.toUpperCase())
console.log(countriesUpper)

//7
const countriesLength = countries.map((country) => country.length)
console.log(countriesLength)

//8
const numbersSquared = numbers.map((num) => num**2)
console.log(numbersSquared)

//9
const namesUpper = names.map((name) => name.toLocaleUpperCase())
console.log(namesUpper)

//10
const prices = products.map((product) => product.price)
console.log(prices)

//11
const countriesWithLand = countries.filter((country) => country.toLowerCase().includes('land'))
console.log(countriesWithLand)

//12
const countriesSixLong = countries.filter((country) => country.length === 6)
console.log(countriesSixLong)

//13
const countriesSixPlus = countries.filter((country) => country.length >= 6)
console.log(countriesSixPlus)

//14
const countriesStartWithE = countries.filter((country) => country.startsWith('E'))
console.log(countriesStartWithE)

//15
const productsWithPrices = products.filter((item) => typeof item.price == 'number')
console.log(productsWithPrices)

//16
const mixedArray = [5, 6, 'hello', 'no', true]
const getStringLists = mixedArray.filter((item) => typeof item == 'string')
console.log(getStringLists)

//17
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

//18
function describe(array) {
    const countriesCopy = array
    countriesCopy[array.length-1] = `and ${array[array.length-1]}`
    const statement = countriesCopy.reduce((acc,cur) => acc + ", " + cur)
    console.log(`${statement} are north European countries.`)
}

describe(countries)

//19
// some is like OR, every is like AND

//20
const longNames = names.some((name) => name.length > 7)
console.log(longNames)

//21
const allCountriesWithLand = countries.every((country) => country.toLowerCase().includes('land'))
console.log(allCountriesWithLand)

//22 find returns the contents, findIndex returns the location

//23
const firstSix = countries.find((country) => country.length == 6)
console.log(firstSix)

//24
const firstSixIndex = countries.findIndex((country) => country.length == 6)
console.log(firstSixIndex)

//25
const norwayIndex = countries.findIndex((country) => country == 'Norway')
console.log(norwayIndex)

//26
const russiaIndex = countries.findIndex((country) => country == "Russia")
console.log(russiaIndex)