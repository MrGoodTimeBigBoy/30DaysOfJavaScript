//1
const priceSum = products.map((item) => item.price).filter((item) => typeof item == 'number').reduce((acc,cur) => acc + cur, 0)
console.log(priceSum)

//2
const priceSumReduce = products.reduce((acc,cur) => acc + (cur.price.parseInt || 0),0)
console.log(priceSumReduce)