function loggingIdentity<T>(arg: T): T {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
// console.log(loggingIdentity('hello'));
// console.log(loggingIdentity([1, 2, 3, 4]));


function loggingIdentityArray<T>(arg: T[]): T[] {
    console.log(arg.length);  // Error: T doesn't have .length
    // add Array then arg type use Array prototype
    return arg;
}
// or
/*function loggingIdentityArray<T>(arg: Array<T>): Array<T> {
    return arg;
}*/
console.log(loggingIdentityArray([1, 2, 3, 4]));