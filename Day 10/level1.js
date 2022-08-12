//1

const blank = new Set()
console.log(blank)

//2

const integers = new Set()
for (i=0; i<=10; i++){
  integers.add(i)
}
console.log(integers)

//3
integers.delete(10)
console.log(integers)

//4
integers.clear()
console.log(integers)

//5
const words = ['one','two','three','four','five','five']
const wordsSet = new Set(words)
console.log(wordsSet)

//6
const countriesLength = []
for (country of countries){
  countriesLength.push([country.name,country.name.length])
}
const countriesMap = new Map(countriesLength)
console.log(countriesMap)
console.log(countriesMap.get('France'))