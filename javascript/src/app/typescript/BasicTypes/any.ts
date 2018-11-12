// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false; // okay, definitely a boolean
// console.log(notSure);

// let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
// console.log(notSure);

// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
// console.log(prettySure);
// let list: any[] = [1, true, "free"];
// list[1] = 100;
// console.log(list);

let someValue: any = "this is a string";

// let strLength: number = someValue.length;
let strLength: number = (someValue as string).length;
console.log(someValue, strLength);