//1
/*
function fullName() {
    console.log('your full name')
}
fullName()
*/
//2

function fullName(firstName,lastName){
    console.log(`${firstName} ${lastName}`)
}
fullName('Ian', 'Burrows')

//3

function addNumbers() {
    let sum = 0
    for (item of arguments) {
        sum += item
    }
    return sum
}

console.log(addNumbers(0,1,2,3))

//4
function areaOfRectangle(length,width) {
    return length * width
}

console.log(areaOfRectangle(6,4))

//5
function perimeterOfRectangle(length,width) {
    return 2*length + 2*width
}

console.log(perimeterOfRectangle(7,4))

//6

function volumeOfRectPrism(length,width,height) {
    return length*width*height
}

console.log(volumeOfRectPrism(10,3,4))

//7

function capitalizeArray(array) {
    const arrayCaps = []
    for (item of array) {
        arrayCaps.push(item.toUpperCase())
    }
    return arrayCaps
}

const words = ['hello','goodbye','yes','no']
console.log(capitalizeArray(words))

//8

function addItem(item,array) {
    array.push(item)
    return array
}

console.log(addItem('maybe', words))

//9

function removeItem(index,array) {
    array.splice(index,1)
    return array
}

console.log(removeItem(3,words))

//10

function sumOfNumbers(number){
    let sum = 0
    for (let i=0; i <= number; i++){
        sum += i
    }
    return sum
}

console.log(sumOfNumbers(6))

//11

function sumofOdds(number){
    let sum = 0
    for (let i = 0; i <= number; i++){
        if (i%2){
            sum += i
        }
    }
    return sum
}

console.log(sumofOdds(5))

//12

function sumOfEvens(number){
    let sum = 0
    for (let i = 0; i <= number; i++){
        if (!i%2){
            sum += i
        }
    }
    return sum
}

console.log(sumOfEvens(4))

//13

function evensAndOdds(number){
    let evens = 0
    let odds = 0
    for (let i = 0; i <= number; i++){
        (i%2) ? odds++ : evens++
    }
    console.log(`The number of odds are ${odds}\nThe Number of evens is ${evens}`)
}

evensAndOdds(100)