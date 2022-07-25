//1.
const empty = Array()
console.log(empty)

//2.
const hasEight = Array(8)
console.log(hasEight)

//3.
console.log(hasEight.length)

//4.
const nineWorlds = ['asgard', 'vanaheim', 'alfheim', 'midgard', 'jotunheim', 'muspellsheim', 'svartalfaheim', 'nilfheim', 'nidavellir']
console.log(`First world: ${nineWorlds[0]}`)
console.log(`Middle world: ${nineWorlds[4]}`)
console.log(`Last world: ${nineWorlds[8]}`)

//5. 
let mixedDataTypes = [3, true, 'hello', NaN, 3.14, ,"bye"]
console.log(mixedDataTypes.length)

//6.
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//7.
console.log(itCompanies)

//8.
console.log(itCompanies.length)

//9.
console.log(`first IT Company: ${itCompanies[0]}`)
console.log(`middle IT Company: ${itCompanies[3]}`)
console.log(`last IT Company: ${itCompanies[6]}`)

//10.
console.log(itCompanies.join(', '))

//11. No, I will not do each of them one by one
console.log(itCompanies[0].toUpperCase())

//12.
let firstSix = itCompanies.pop()
console.log(`${itCompanies.join(', ')} and ${firstSix} are big IT companies)`)
itCompanies.push(firstSix)

//13
let index = itCompanies.indexOf('Facebook')
if(index == -1){
    console.log('Facebook is not found in the list')
} else {
    console.log(`Yes, Facebook is item ${index + 1}`)
}

//14
console.log(itCompanies)
itCompanies[6].includes('oo')
    ? itCompanies.splice(6,1)
    : console.log('its good')

    itCompanies[5].includes('oo')
    ? itCompanies.splice(5,1)
    : console.log('its good')

    itCompanies[4].includes('oo')
    ? itCompanies.splice(4,1)
    : console.log('its good')

    itCompanies[3].includes('oo')
    ? itCompanies.splice(3,1)
    : console.log('its good')

    itCompanies[2].includes('oo')
    ? itCompanies.splice(2,1)
    : console.log('its good')

    itCompanies[1].includes('oo')
    ? itCompanies.splice(1,1)
    : console.log('its good')

    itCompanies[0].includes('oo')
    ? itCompanies.splice(0,1)
    : console.log('its good')
 console.log(itCompanies)

//15.
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies.sort())

//16.
console.log(itCompanies.reverse())

//17
console.log(itCompanies.slice(0,3))

//18.
console.log(itCompanies.slice(4,7))

//19.
console.log(itCompanies.slice(3,4))

//20.
itCompanies.shift()
console.log(itCompanies)

//21
itCompanies.splice(3,1)
console.log(itCompanies)

//22.
itCompanies.pop()
console.log(itCompanies)

//23.
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies)