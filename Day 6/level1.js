//1. 
for(let i = 0; i <= 10; i++){
    console.log(i)
}
/*
let i = 0
while (i <= 10){
    console.log(i)
    i++
}

i = 0
do {
    console.log(i)
    i++
} while (i <= 10)
*/

//2.
for(let i = 10; i >= 0; i--){
    console.log(i)
}

//3.
/*
const n = prompt('pick a number')
for(let i = 0; i <= n; i++){
    console.log(i)
}
*/

//4.
let arr = []
for(let i = 1; i <= 7; i++){
    arr.push('#')
    console.log(arr.join(''))
}

//5
for(let i = 0; i<= 10; i++){
    console.log(`${i} x ${i} = ${i**2}`)
}

//6
console.log('i   i^2  i^3')
for(let i = 0; i<= 10; i++){
    console.log(`${i}   ${i**2}  ${i**3}`)
}

//7
for(let i = 0; i <= 10; i++){
    let odd = i%2
    !odd ? console.log(i) : odd = NaN
}

//8
for(let i = 0; i <= 10; i++){
    let odd = i%2
    odd ? console.log(i) : odd = NaN
}

//9
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

for(let i = 0; i<primes.length; i++){
    console.log(primes[i])
}

//10
let sum = 0
for(let i = 0; i<=100; i++){
    sum = sum+i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`)

//11
let oddSum = 0
let evenSum = 0
for(let i = 0; i <= 100; i++){
    let odd = i%2
    odd ? oddSum = oddSum + i : evenSum = evenSum + i
}
console.log(`The sum of all even numbers from 0 to 100 is ${evenSum}. And the sum of all odd numbers is ${oddSum}.`)

//12
let sumArray = [0,0]
for(let i = 0; i <= 100; i++){
    let odd = i%2
    odd ? sumArray[1] = sumArray[1] + i : sumArray[0] = sumArray[0] + i
}
console.log(`The sum of all even numbers from 0 to 100 is ${sumArray[0]}. And the sum of all odd numbers is ${sumArray[1]}.`)
console.log(sumArray)

//13
const randomArray = []
let randomDigit
for(let i=0; i<5; i++){
    randomDigit = Math.random()*10
    randomArray.push(Math.ceil(randomDigit))
}
console.log(randomArray)

//14
const randomArrayUnique = []
let uniqueDigit
do {
    uniqueDigit = Math.ceil(Math.random()*10)
    if (randomArrayUnique.includes(uniqueDigit)){
        console.log('repeat digit found')
    }
    else {
        randomArrayUnique.push(uniqueDigit)
    }
} while (randomArrayUnique.length<5)
console.log(randomArrayUnique)

//15
const charactersArray = ['0','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const charOutputArray = []
let character
do {
    character = Math.floor(Math.random()*37)
    charOutputArray.push(charactersArray[character])
} while (charOutputArray.length<6)
console.log(charOutputArray.join(''))