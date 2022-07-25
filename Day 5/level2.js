//1.
console.log(countries)
console.log(webTechs)

//2.
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text)
let regexp = /[,.]/gi
let clean = text.replace(regexp,'')
console.log(clean)

let words = clean.split(' ')
console.log(words)
console.log(words.length)

//3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

let meatIndex = shoppingCart.indexOf('Meat')
if(meatIndex == -1){
    shoppingCart.unshift('Meat')
} else {
    console.log(`Already there, boss`)
}

let sugarIndex = shoppingCart.indexOf('Sugar')
if(sugarIndex == -1){
    shoppingCart.push('Sugar')
} else {
    console.log(`Already there, boss`)
}

let teaIndex = shoppingCart.indexOf('Tea')
if(teaIndex == -1){
    console.log(`No tea here, dude`)
} else {
    shoppingCart[teaIndex] = 'Green Tea'
}

console.log(shoppingCart)

//4.
let ethiopiaIndex = countries.indexOf('Ethiopia')
if(ethiopiaIndex == -1){
    countries.push('Ethiopia')
} else {
    console.log("ETHIOPIA")
}

//5.
let sassIndex = webTechs.indexOf('Sass')
if(sassIndex == -1){
    webTechs.push('Sass')
    console.log(webTechs)
} else {
    console.log("Sass is a CSS preprocess")
}

//6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)