class Animal {
    nameAnimal = 'Morzsi';
    constructor(nameAnimal_:string) {
        console.log('Hello', this.nameAnimal)
        console.log('Hello', nameAnimal_)
        
    }
}

// Felüldefiniálom az örökölt osztályban az anyaosztályt - super segítségével a konstruktorból
class Dog extends Animal {
    dogName: string;
    constructor() {
        super('Bodri')
        this.dogName = 'Bodri'
        //this.dogName = 'Bodri';
        //console.log('Hello', this.dogName)
    }

}
let dog = new Dog();
console.log(dog) //a szülőben lévő public adatokat elérem a gyereknél - angular: service osztályokat örököltetünk egymásból az extend


