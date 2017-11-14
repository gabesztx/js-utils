function f() {
    console.log("f(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log('F - target', target);
        // console.log('F - propertyKey', propertyKey);
        // console.log('F - descriptor', descriptor);
        console.log("F - (): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log('G - target', target);
        // console.log('G - propertyKey', propertyKey);
        // console.log('G - descriptor', descriptor);
        console.log("G - (): called");
    }
}

class DecoratorClass {
    @f()
    @g()
    method() {
        console.log('METHOOOOD');
    }
}
// let decoratorClass = new DecoratorClass();
// decoratorClass.method();
