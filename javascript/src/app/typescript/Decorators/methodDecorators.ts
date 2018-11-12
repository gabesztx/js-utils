function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log(target);
        console.log(descriptor);
        descriptor.enumerable = value;
        
    };
}

class GreeterMethod {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greetClass = new GreeterMethod('Gabesz');
console.log('hello decor');
// console.log(greetClass.greet());

