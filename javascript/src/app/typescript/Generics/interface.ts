/*interface GenericIdentityFn {
 <T>(arg: T): T;
 }*/

// let myIdentityAny: GenericIdentityFn = identity;

interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}


// let myIdentityNumber: GenericIdentityFn<number> = identity;
// let myIdentityString: GenericIdentityFn<string> = identity;

// console.log(myIdentityNumber(10));
// console.log(myIdentityString('String'));
