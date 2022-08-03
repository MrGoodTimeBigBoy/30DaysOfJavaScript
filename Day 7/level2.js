//1

function solveLinEquation(x) {
    let m = 2
    let b = 4
 return m*x + b
}

console.log(solveLinEquation(4))

//2

function solveQuadEquation(a,b,c){
    let posCase = (-b + Math.sqrt(b**2-4*a*c) )/(2*a)
    let negCase = (-b - Math.sqrt(b**2-4*a*c) )/(2*a)
    let solutionSet = [posCase,negCase]
    return solutionSet
}

console.log(solveQuadEquation(1,7,12))

//3

function printArray(array){
    for (element of array){
        console.log(element)
    }
}

let numArray = [1,2,3,4,5]
printArray(numArray)

//4

function showDateTime(){
const today = new Date()
const formatYear = String(today.getFullYear()).padStart(4,'0')
const formatMonth = today.getMonth().toString().padStart(2,'0')
const formatDay = String(today.getDate()).padStart(2,'0')
const formatHour = String(today.getHours()).padStart(2,'0')
const formatMinute = today.getMinutes().toString().padStart(2,'0')
console.log(`${formatMonth}/${formatDay}/${formatYear} ${formatHour}:${formatMinute}`)
}

showDateTime()

//5

function swapValues(x,y){
    console.log(`x = ${y}, y = ${x}`)
}

swapValues(3,4)

//6

function reverseArray(array){
    let swapArray = []
    for (element of array) {
        swapArray.unshift(element)
    }
    return swapArray
}

console.log(reverseArray(numArray))

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

//14

//see level 1, #3

//15

const randomUserIp = function() {
    const ipArray = []
    for(let i = 0; i< 4; i++){
        let number= Math.floor(Math.random()*256)
        ipArray.push(number)
    }
    return `${ipArray[0]}.${ipArray[1]}.${ipArray[2]}.${ipArray[3]}`
}

console.log(randomUserIp())

//16

function randomMacAddress(){
    const hexArray = ['0','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f']
    let hexDigit = () => {
        return hexArray[Math.floor(Math.random()*16)]
    }
    let hexPair = () => {
        return `${hexDigit()}${hexDigit()}`
    }
    return `${hexPair()}:${hexPair()}:${hexPair()}:${hexPair()}:${hexPair()}:${hexPair()}`
}

console.log(randomMacAddress())

//17

function userIdGenerator(){
    const charactersAskArray = ['0','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const charOutputAskArray = []
    let passLength = 7
    do {
        character = Math.floor(Math.random()*37)
        charOutputAskArray.push(charactersAskArray[character])
    } while (charOutputAskArray.length<passLength)
    return charOutputAskArray.join('')
}

console.log(userIdGenerator())