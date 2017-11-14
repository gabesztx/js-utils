function identityValueType<T>(arg: T): T {
    return arg;
}

// let myIdentity: <T>(arg: T) => T = identityValueType;
// let myIdentity: <U>(arg: U) => U = identityValueType;
// let myIdentity: <WHATEVER>(arg: WHATEVER) => WHATEVER = identityValueType;

// console.log(myIdentity('string param')); //ANY
// console.log(myIdentity(10)); //ANY
// console.log(myIdentity({x:0,y:0})); //ANY
// console.log(myIdentity([0, 1, 2, 3])); //ANY

// let myIdentityObject: {<T>(arg: T): T} = identityValueType; //OBJECT
// console.log(myIdentityObject({x:0,y:0}));

// let myIdentityArray: <T>(arg: T[]) => T[] = identityValueType; //ARRAY
// console.log(myIdentityArray([0, 1, 2, 3, 4]));

