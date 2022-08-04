//1
const dog1 = {
    name: 'Fido'
}

//2
console.log(dog1)

//3
const dog2 = {
    name: 'Ruffus',
    legs: 4,
    color: 'brown',
    age: 7.5,
    bark: function() {
        return `woof woof, my name is ${this.name}`
    }
}
//4
console.log(dog2.name)
console.log(dog2.legs)
console.log(dog2.color)
console.log(dog2.age)
console.log(dog2.bark())

//5
dog2.breed = 'hound dog'
dog2.getDogInfo = function() {
    return `${this.name} is a ${this.age} year old, ${this.color} ${this.breed}.`
}

console.log(dog2.getDogInfo())