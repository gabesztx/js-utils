class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
        // console.log(message);
    }
    greet() {
        // return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter);