let input = [1, 2, 3, 4, 5, 6, 7, 8];
let [firstValue, secondValue] = input;
let [first, ...otherValue] = input;


console.log(firstValue);
console.log(otherValue); // az összes többi


// object Destr.

let obj = {
    a: 'name',
    b: 10,
    c: 'Holnap Máltára megyek'

}

let {a, b, c} = obj;

console.log(a);
console.log(b);
console.log(c);