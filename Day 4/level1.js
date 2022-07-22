//Question 1:

let yourAge 
//yourAge= prompt('Enter your age:','Your age')
if (yourAge<18) {
    console.log(`Bzzt wrongo, you gotta wait ${18-yourAge} years, little baby`)
} else {
    console.log('Bruh ur good to drive.')
}

//Question 2:

let myAge = 38
if (yourAge<myAge) {
    console.log(`shawty, ur ${myAge-yourAge} younger than me`)
} else {
    console.log(`ur old as shit, you've got ${yourAge-myAge} years on me, you ancient bitch`)
}

//Question 3:

let a = 3
let b = 4

console.log(`A = ${a}\nB = ${b}`)

if (a<b) {
    console.log('A is less than B')
} else if (a>b) {
    console.log('A is greater than B')
} else {
    console.log('them shits is the same')
} 

a<b ? console.log('A is less than B') : a>b ? console.log('A is greater than B') : console.log('them shits is the same')

//Question 4:

let myNumber 
//myNumber = prompt("Pick a number, any number","just an integer smart guy")
//let testMod = 6.5%2
//console.log(`${testMod}`)
let numMod = myNumber%2
!numMod ? console.log("That's an even number") : numMod==1 ? console.log("That's an odd number") : console.log("What did I fucking tell you?")