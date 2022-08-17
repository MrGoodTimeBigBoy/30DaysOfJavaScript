//1
const str1 = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern1 = /\d+/g
const numbers1 = str1.match(pattern1)
const income = numbers1.map((num) => parseInt(num)).reduce((acc,cur) => acc + cur,0)

console.log(income)

//2
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
const sortedPoints = points.map((num) => parseInt(num)).sort()
const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0]

console.log(distance)

//3
function is_valid_variable(name){
  let isValid = true
  const numStart = /^\d|[^A-Za-z0-9$_]/g
  const invChar = /a/
  if (numStart.test(name)){
    isValid = false
  }
  return isValid
}

console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))