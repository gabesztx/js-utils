function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // console.log('target: ', target); // get class scope
    // console.log('propertyKey: ', propertyKey); // get current method property name
    // console.log('descriptor: ', descriptor); // get current method settings
    descriptor.enumerable = value;
  };
}

export class Greeter {
  greeting: string;

  constructor(message) {
    this.greeting = message;
  }

  // @enumerable(false)
  greet() {
    return 'Hello ' + this.greeting;
  }
}
// TODO: enumerable
// TODO: configurable
