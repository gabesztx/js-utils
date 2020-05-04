function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
  // Object seal - set private object and no added new property!
}

@sealed // add private Class
export class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return 'Name: ' + this.name;
  }
}


function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override hello';
  };
}

@classDecorator
export class Greeter {
  property = 'property';
  hello: string;

  constructor(m: string) {
    this.hello = m;
  }
}

// const greeter = new Greeter('Gabesz')
// console.log(greeter);
