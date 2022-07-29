//1&2
const sortedCountries = countries
sortedCountries.sort()
console.log(sortedCountries)

//3
const sortedWebTechs = webTechs
sortedWebTechs.sort()
const sortedMernStack = mernStack
sortedMernStack.sort()
console.log(sortedWebTechs)
console.log(sortedMernStack)

//4
const morelandArray = []
for (const name of moreCountries) {
    (name.includes('land')) ? morelandArray.push(name) : console.log('not found')
}
(morelandArray.length==0) ? console.log('String "land" not found in array') : console.log(morelandArray)

//5
longestArray = [0,'']
for (const name of moreCountries) {
    (name.length>longestArray[0]) ? longestArray = [name.length,name] : console.log('moving along')
}
console.log(`The longest country name is '${longestArray[1]}' with a length of ${longestArray[0]} characters.`)

//6 its exactly the same as 4?

//7
const foursArray = []
for (const name of moreCountries) {
    (name.length==4) ? foursArray.push(name) : console.log('moving along')
}
console.log(foursArray)

//8
const twoWordsArray = []
for (const name of moreCountries) {
    (name.includes(' ') || name.includes('-')) ? twoWordsArray.push(name) : "moving along"
}
console.log(twoWordsArray)

//9
reverseArray = []
while (moreCountries.length>0) {
    reverseArray.push(moreCountries.pop().toUpperCase())
}
console.log(reverseArray)