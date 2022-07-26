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
