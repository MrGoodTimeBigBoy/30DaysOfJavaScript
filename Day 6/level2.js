//1
const charactersAskArray = ['0','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const charOutputAskArray = []
//const passLength = prompt('How many characters should it be?')
const passLength = 7
do {
    character = Math.floor(Math.random()*37)
    charOutputAskArray.push(charactersAskArray[character])
} while (charOutputAskArray.length<passLength)
console.log(charOutputAskArray.join(''))

//2
const hexArray = ['0','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f']
const hexOutput = []
const numberlength = 8
do {
    character = Math.floor(Math.random()*16)
    hexOutput.push(hexArray[character])
} while (hexOutput.length<numberlength)
console.log(`#${hexOutput.join('')}`)

//3
const rgbArray = []
for(let i=0; i<3; i++) {
    character = Math.floor(Math.random()*256)
    rgbArray.push(character)
}
console.log(`rgb(${rgbArray.join(',')})`)

//4
const countriesCap = []
for (const name of countries) {
    countriesCap.push(name.toUpperCase())
}
console.log(countriesCap)

//5

//6
const countriesArray = []
for (const name of countries) {
    character = [name,name.toUpperCase().substr(0,3),name.length]
    countriesArray.push(character)
}
console.log(countriesArray)

//7
const landArray = []
for (const name of countries) {
    (name.includes('land')) ? landArray.push(name) : console.log('not found')
}
(landArray.length==0) ? console.log('String "land" not found in array') : console.log(landArray)

//8

const endArray = []
for (const name of countries) {
    (name.substring(name.length-2,name.length)=='ia') ? endArray.push(name) : console.log('not found')
}
(endArray.length==0) ? console.log('There are no countries that end in "ia"') : console.log(endArray)

//9

let longestArray = [0,'']
for (const name of countries) {
    (name.length>longestArray[0]) ? longestArray = [name.length,name] : console.log('moving along')
}
console.log(`The longest country name is '${longestArray[1]}' with a length of ${longestArray[0]} characters.`)

//10

const fivesArray = []
for (const name of countries) {
    (name.length==5) ? fivesArray.push(name) : console.log('moving along')
}
console.log(fivesArray)

//11
for (const name of webTechs) {
    (name.length>longestArray[0]) ? longestArray = [name.length,name] : console.log('moving along')
}
console.log(`The longest word is '${longestArray[1]}' with a length of ${longestArray[0]} characters.`)

//12
// bro this is exactly the same

//13
const mernStack = ["MondoDB","Express","React","Node"]
let merncronym = []
for (const name of mernStack) {
    merncronym.push(name[0])
}
console.log(`${merncronym.join('')} is a stupid name.`)

//14

//15

fruitArray = ['banana','orange','mango','lemon']
let reverseArray = []
while (fruitArray.length>0) {
    reverseArray.push(fruitArray.pop())
}
console.log(reverseArray)

//16

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
for (const name of fullStack){
    for (const item of name){
        console.log(item)
    }
}