//1
let a = [1,2,3,4,5]
let b = [1,4,0,7,9]
let c = [...a,...b]
let C = new Set(c)
console.log(C)

//2
let B = new Set(b)
let d = a.filter((num) => B.has(num))
let D = new Set(d)
console.log(D)