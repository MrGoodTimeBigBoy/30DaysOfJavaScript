const firstName = 'Ian'
console.log(firstName)
const lastName = 'Burrows'
console.log(lastName)
const country = 'Freedomland'
console.log(country)
const city = `Wes'port`
console.log(city)
const age = 38
console.log(age)
const isMarried = true
console.log(isMarried)
const year = 2022
console.log(year)   //1

console.log('10'==10)   //2
console.log(parseInt('9.8')==10)   //3

console.log(3==3)
console.log(4>3)
console.log(3+4==7) //4.i

console.log(2==3)
console.log(Math.PI==3.14)
console.log(NaN==0) //4.ii

console.log('5.')
console.log(4 > 3)   //true
console.log(4 >= 3)   //true
console.log(4 < 3)   //false
console.log(4 <= 3)   //false
console.log(4 == 4)   //true
console.log(4 === 4)   //true
console.log(4!= 4)   //false
console.log(4 !== 4)   //false
console.log(4!='4')   //false
console.log(4 == '4')   //true
console.log(4 === '4')   //false
let python = 'python', jargon = 'jargon', dragon = 'dragon'
console.log(python.length!=jargon.length)   //false   5

console.log('6.')
console.log(4 > 3 && 10 < 12)   //true
console.log(4 > 3 && 10 > 12)   //false
console.log(4 > 3 || 10 < 12)   //true
console.log(4 > 3 || 10 > 12)   //true
console.log(!(4 > 3))   //false
console.log(!(4 < 3))   //true
console.log(!(false))   //true
console.log(!(4 > 3 && 10 < 12))   //false
console.log(!(4 > 3 && 10 > 12))   //true
console.log(!(4 === '4'))   //true
console.log(!(dragon.includes('on') && python.includes('on')))   //false

console.log('7.')
const today = new Date()
console.log('year: ' + today.getFullYear())
console.log('month: ' + today.getMonth())
console.log('Date: ' + today.getDate())
console.log('Week day: ' + today.getDay())
console.log('Hour: ' + today.getHours())
console.log('Minute: ' + today.getMinutes())
console.log('Seconds since start: ' + today.getTime()/1000)
