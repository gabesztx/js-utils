class Animal2 {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
        console.log('Animal2 contructor', this.name);
    }
}

// let anim1 = new Animal2('Tomika a kígyó');
// console.log(anim1);
// anim1.name; // Error: 'name' is private;


class Rhino extends Animal2 {
    constructor() {
        super('Rhino')
    }
}

class Employee {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

let animal = new Animal2("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");
console.log(animal);
console.log(rhino);
console.log(employee);

animal = rhino;
console.log('animal private overwrite rhino', animal);

// animal = employee; // ERROR a két privátot nem lehet felül írni
// console.log('animal private overwrite employee', animal);
