console.time('While loop')
console.groupCollapsed('While Loop')
let i = 0
while (i < 10){
    console.log(`I'm counting ${i}`)
    i++
}
console.groupEnd()
console.timeEnd('While loop')


console.time('for loop')
console.groupCollapsed('for loop')
for (i=0; i<=9; i++){
    console.log(`I'm counting ${i}`)
}
console.groupEnd()
console.timeEnd('for loop')


console.time('for of loop')
console.groupCollapsed('for of loop')
const nums = [0,1,2,3,4,5,6,7,8,9]
for (const j of nums){
    console.log(`I'm counting ${j}`)
}
console.groupEnd()
console.timeEnd('for of loop')


console.time('forEach loop')
console.groupCollapsed('forEach loop')
const digs = [0,1,2,3,4,5,6,7,8,9]
digs.forEach((k) => console.log(`I'm counting ${k}`))
console.groupEnd()
console.timeEnd('forEach loop')