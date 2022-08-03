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

function areaOfCircle(r) {
    return Math.PI*r**2
}

console.log(areaOfCircle(4))

//8

function circumOfCircle(r){
    return 2*Math.PI*r
}

console.log(circumOfCircle(3))

//9

function density(mass,volume){
    return mass/volume
}

console.log(density(100,volumeOfRectPrism(2,2,2)))

//10

function speed(distance,time){
    return distance/time
}

console.log(`You were travelling at a rate of ${speed(100,2)} MPH`)

//11

//ok I get it

//12

//ok I get it

//13

function bmi(weight,height){
    let value = weight/(height**2)
    if (value<18.5) {
        console.log('Your BMI is Underwieght')
    } else if (value<25) {
        console.log('Your BMI is Normal')
    } else if (value<30) {
        console.log('Your BMI is Overweight')
    } else {
        console.log('Your BMI is Obese')
    }
}

bmi(60,1.7)

//14

function checkSeason(month){
switch(month) {
    case 'January':
        console.log('It is Winter')
        break
    case 'February':
        console.log('It is Winter')
        break
    case 'March':
        console.log('It is Winter')
        break
    case 'April':
        console.log('It is Spring')
        break
    case 'May':
        console.log('It is Spring')
        break
    case 'June':
        console.log('It is Spring')
        break
    case 'July':
        console.log('It is Summer')
        break
    case 'August':
        console.log('It is Summer')
        break
    case 'September':
        console.log('It is Summer')
        break
    case 'October':
        console.log('It is Autumn')
        break
    case 'November':
        console.log('It is Autumn')
        break
    case 'December':
        console.log('It is Autumn')
        break
    default:
        console.log('You did not enter a valid month')
}
}

checkSeason('January')

//15

function findMax(num1,num2,num3){
    let largest
    largest = num1
    if (num2>largest){
        largest = num2
    }
    if (num3>largest){
        largest = num3
    }
    return largest
}

console.log(findMax(-8,-7,-9))