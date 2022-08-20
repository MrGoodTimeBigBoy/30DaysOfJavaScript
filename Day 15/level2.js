class Dog extends Animal {
    constructor(name,age,color,legs,neutered = false) {
        super(name,age,color,legs)
        this.neutered=neutered
    }
    get isNeutered() {
        return this.neutered
    }
    get getDescription() {
        const neuteredStatus = ''
        if (!this.neutered){
            neuteredStatus = 'not '
        }
        return  `${this.age} years old, ${this.color.toLowerCase()}, and is ${neuteredStatus}neutered.`
    }
}

const animal3 = new Dog('Lulu',14,'Tan', 4, true)
console.log(animal3.getDescription)