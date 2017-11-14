/* Array destructuring */

// let input = [1, 2];
// let [first, second] = input;
// console.log(first);
// console.log(second);

/* Swap variables */

// [first, second] = [second, first];
// console.log(first);
// console.log(second);


/* Function params */

// function f([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
// }
// f([1, 2]);


/* Array rest */

// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // outputs 1
// console.log(rest); // outputs [ 2, 3, 4 ]

// let [,second,,fourth] = [1, 2, 3, 4];
// console.log(second);
// console.log(fourth);

/* Object destructuring */

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// let {a, b} = o;
// console.log(a);
// console.log(b);


// ({ a, b } = { a: "baz", b: 101 });
// console.log(a);
// console.log(b);


// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;
// console.log(passthrough);
// console.log(total);