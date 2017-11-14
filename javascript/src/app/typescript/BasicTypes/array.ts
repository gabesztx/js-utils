// let userName: string = 'hello gaben';
// let list: number[] = [1, 2, 3];
// let list: Array<number> = [1, 2, 3]; // Generic
// console.log(list);

//
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
// console.log(x);

// console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
//
// x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
// console.log(x);
// console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
// x[6] = true; // Error, 'boolean' isn't 'string | number'