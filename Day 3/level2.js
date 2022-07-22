//const base = prompt('What is the base of the triangle?', 'Enter base here')
//const height = prompt('What is the height of the triangle?','Enter height here')
//console.log(`Base of triangle: ${base}\nHeight of triangle: ${height}\nArea of triangle: ${base*height*0.5}`) //1

//const a = parseInt(prompt('What is the length of side a?','Enter length of side a'))
//const b = parseInt(prompt('What is the length of side b?','Enter length of side b'))
//const c = parseInt(prompt('What is the length of side c?','Enter length of side c'))
//console.log(`The perimeter of the triangle is ${a+b+c}`)    //2

//const rectLength = parseInt(prompt('What is the length of the rectangle?','Enter length of the rectangle'))
//const rectWidth = parseInt(prompt('What is the width of the rectangle?','Enter width of the rectangle'))
//console.log(`Length of rectangle: ${rectLength}\nWidth of rectangle: ${rectWidth}\nThe area of the rectangle is ${rectLength*rectWidth}\nThe perimeter of the rectangle is ${2*(rectLength+rectWidth)}`)

//const radius = parseInt(prompt('What is the radius of the circle','Circle radius'))
//const pi = 3.14
//console.log(`Circle radius: ${radius}\nThe area of the circle is ${pi*radius**2}`)

let x1 = 0
let y = 2*x1 - 2
const yInt = y
let y2 = 2*++x1 - 2
const slope = y2 - yInt
let y1 = 0
let inverseY=(y1+2)/2
const xInt = inverseY
console.log(`y-intercept = ${yInt}\nSlope = ${slope}\nx-intercept = ${xInt}`)

const p1=[2,2]
const p2=[6,10]
const slope2 = (p2[1]-p1[1])/(p2[0]-p1[0])
console.log(`The slope in question 6 is ${slope2}`)

console.log(slope == slope2) //7

x1 =-3
let yQuadratic = x1**2 + 6*x1 + 9
console.log(yQuadratic) //8

//let hours = prompt('How many hours did you work?','Enter hours')
//let rate = prompt('What is your rate of pay?','Enter rate')
//console.log(`Your Hours = ${hours}\nYour rate = ${rate}\nYour weekly earning is ${hours*rate}`) //9

//const yourFirstName = prompt("What is your first name", 'Enter Name')
//const yourLastName = prompt("What is your last name", 'Enter Name')
//yourFirstName.length > 7
//  ? console.log(`Your name is long`)
//  : console.log('your name is short')   //10
//yourFirstName.length > yourLastName.length
//  ? console.log(`Your first name, ${yourFirstName}, is longer than your last name, ${yourLastName}.`)
//  : console.log(`Your first name, ${yourFirstName}, is not longer than your last name, ${yourLastName}.`)   //11

let myAge = 250
let yourAge = 25
console.log(`I am ${myAge - yourAge} years older than you.`)    //12

//const driveAge = 2022 - parseInt(prompt('Enter your birth year','Birth Year'))
//driveAge > 18
//  ? console.log(`You are ${driveAge}. You are old enough to drive`)
//  : console.log(`You are ${driveAge}. You will be allowed to drive after ${18-driveAge} years.`)    //13

//const yearsToSeconds = parseInt(prompt('Enter a number of years','Number of Years'))
//console.log(`Number of years you live: ${yearsToSeconds}\nYou lived ${yearsToSeconds*365.25*24*60*60} seconds.`)  //14

console.log(`i. ${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`)
console.log(`ii. `)
console.log(`iii. `)