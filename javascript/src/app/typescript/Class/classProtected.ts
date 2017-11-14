 class Person {
 protected name: string;
 constructor(name: string) {
 this.name = name;
 }
 }

 class Employee1 extends Person {
 private department: string;
 constructor(name: string, department: string) {
 super(name);
 this.department = department;
 }

 public getElevatorPitch() {
 return `Hello, my name is ${this.name} and I work in ${this.department}.`;
 }
 }

 let howard = new Employee1("Howard", "Sales");
 console.log(howard.getElevatorPitch());
 // console.log(howard.name); // error


/*
class Person1 {
    protected name: string;

    protected constructor(theName: string) {
        this.name = theName;
    }
}

// Employee can extend Person
class Employee2 extends Person1 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee2("Howard", "Sales");
// let john = new Person1("John"); // Error: The 'Person' constructor is protected*/
