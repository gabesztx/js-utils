function add(x: number, y: number): number {
    return x + y;
}
// console.log(add(5,10));

// myAdd has the full function type
let myAdd = function (x: number, y: number): number {
    return x + y;
};
// console.log(myAdd(10, 10));

// The parameters 'x' and 'y' have the type number
let myAdd1: (baseValue: number, increment: number) => number =
    (x: number, y: number) => {
        return x + y;
    };
// console.log(myAdd1(10, 10));
