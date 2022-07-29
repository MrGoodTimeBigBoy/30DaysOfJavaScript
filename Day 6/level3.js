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

//6
const foursArray = []
for (const name of moreCountries) {
    (name.length==4) ? foursArray.push(name) : console.log('moving along')
}
console.log(foursArray)