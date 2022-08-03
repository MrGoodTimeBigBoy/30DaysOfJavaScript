//1

function userIdGeneratedByUser(){
    const charactersAskArray = ['0','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let passLength = prompt('How long should the ID be?')
    let numID = prompt('How many IDs do you need?')
    let eachID =  () => {
        const charOutputAskArray = []
        do   {
            character = Math.floor(Math.random()*37)
            charOutputAskArray.push(charactersAskArray[character])
        } while (charOutputAskArray.length<passLength)
        return charOutputAskArray.join('')
        }
    for (let i = 0; i < numID; i++ )
        console.log(eachID())
}

// userIdGeneratedByUser()

//2

function rgbColorGenerator(){
    let array = []
    for (let i=0; i<3; i++){
        array.push(Math.floor(Math.random()*256))
    }
    return `rgb(${array.join(',')})`
}

console.log(rgbColorGenerator())

//3

function hexaColorGenerator(){
    const charactersHex = ['0','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f']
    const colorArray = []
    for (let i=0; i<6; i++){
        colorArray.push(charactersHex[Math.floor(Math.random()*16)])
    }
    return `#${colorArray.join('')}`
}

console.log(`test hex color ${hexaColorGenerator()}`)

function arrayOfHexaColors(num){
    let array = []
    for (let j=0; j<num; j++){
        let color = hexaColorGenerator()
        array.push(color)
    }
    return array
}

console.log(arrayOfHexaColors(7))

//4

function arrayOfRgbColors(num){
    let array = []
    for (let j=0; j<num; j++){
        array.push(rgbColorGenerator())
    }
    return array
}

console.log(arrayOfRgbColors(3))

//5

function convertHexaToRgb(hexa){
    console.log(`test: ${hexa}`)
    let colorArray=[]
    colorArray.push(parseInt(hexa[1],16)*parseInt(hexa[2],16))
    colorArray.push(parseInt(hexa[3],16)*parseInt(hexa[4],16))
    colorArray.push(parseInt(hexa[5],16)*parseInt(hexa[6],16))
    return `rgb(${colorArray.join(',')})`
}

console.log(convertHexaToRgb(hexaColorGenerator()))

//6

function convertRgbtoHexa(RGB){
    console.log(`test: ${RGB}`)
    colorData = RGB.substring(4,RGB.length-1).split(',')
    return `#${parseInt(colorData[0]).toString(16).padStart(2,'0')}${parseInt(colorData[1]).toString(16).padStart(2,'0')}${parseInt(colorData[2]).toString(16).padStart(2,'0')}`
}

console.log(convertRgbtoHexa(rgbColorGenerator()))

//7
function generateColors(type,number){
    let colors =[]
    switch(type){
        case 'hexa':
            for (let i=0;i<number;i++){
                colors.push(hexaColorGenerator())
            }
            break
        case 'rgb':
            for (let i=0;i<number;i++){
                colors.push(rgbColorGenerator())
            }
            break
        default:
            colors = 'invalid input'
    }
    return colors
}
console.log('7')
console.log(generateColors('rgb',7))

//8
let arrayTest = [1,2,3,4,5,6,7]
function shuffleArray(array){
    let newArray = []
    for (let i=array.length;i>0;i--){
        let item = Math.floor(Math.random()*array.length)
        newArray.push(array[item])
        array.splice(item, 1)
    }
    return newArray
}

console.log(shuffleArray(arrayTest))

//9
function factorial(integer){
    let number = parseInt(integer)
    let result = 1
    if (number<0) {
    result = 'undefined'
    } else {
        for (let i=1; i<=number;i++){
            result = result*i
        }

    }
    return result
}

console.log(factorial(5))

//10
function isEmpty(para){
    (para == null) ? console.log('the item is empty') : console.log('the item is not empty')
}

let stuffCheck
isEmpty (stuffCheck)

//11
function sum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

console.log(sum(1,2,3,4,5,6))

//12

function sumOfArrayItems(array){
    let sum = 0
    for (const item of array){
        if (typeof item == 'number'){
            sum += item
        }   else {
        sum = "Error: Array contains a non-number item."
        break
    }
    }
    return sum
}

let sumArray = [1,2,3,4,5]
console.log(sumOfArrayItems(sumArray))

//13

function average(array){
    let sum = 0
    for (const item of array){
        if (typeof item == 'number'){
            sum += item
        }   else {
        sum = "Error: Array contains a non-number item."
        break
    }
    }    
    return sum/array.length
}

let aveerageArray = [1,2,3,4,5,6,7]
console.log(average(aveerageArray))

//14

function modifyArray(array){
    let result
    if (array.length<5){
        result = "Not Found"
    } else {
        array[4] = array[4].toUpperCase()
        result = array
    }
    return result
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))

//15

//16

let uniqueArray = [1,2,3,4,5,6]
function areUnique(array){
    let result = "No number match found"
    for (let i = 0; i<array.length-1; i++ ){
        let item = array[i]
        for (let j=i+1; j<array.length; j++){
            if (item == array[j]){
                result = "Number Match Found"
                break
            } 
        }
    }
    return result
}
console.log(areUnique(uniqueArray))

//17

let typeArray = [1,true,"yes",9]
function typeUnique(array){
    let type = "No match found"
    for (let i = 0; i<array.length-1; i++ ){
        let item = array[i]
        for (let j=i+1; j<array.length; j++){
            if (typeof item == typeof array[j]){
                type = "Match Found"
                break
            } 
        }
    }
    return type
}
console.log(typeUnique(typeArray))