//1
class Animal {
    constructor(
        name = 'none',
        age = 0,
        color = 'none',
        legs = 4
    ) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    get getName() {
        return this.name
    }
    get getDescription() {
        return `${this.age} years old, ${this.color.toLowerCase()}, with ${this.legs} legs.`
    }
}

const animal1 = new Animal('Nightshade',7,'Black')
console.log(animal1.getName)
console.log(animal1.getDescription)

class Cat extends Animal {
    constructor(name,age,color,legs,neutered = false) {
        super(name,age,color,legs)
        this.neutered=neutered
    }
    get isNeutered() {
        return this.neutered
    }
}

const animal2 = new Cat('Calypso',4,'Black and White', 4,true)
console.log(animal2.getName)
console.log(animal2.getDescription)
console.log(animal2.isNeutered)