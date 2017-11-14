let objectTemplate = {
    a: "foo",
    b: 12,
};
/*
type C = { a: string, b?: number }
function f({a, b = 10000}: C): void {
    console.log(a);
    console.log(b);
}
f(objectTemplate);

*/


/* Default function argument param or call with param */
function foo({ a, b } = { a: "default strong", b: 0 }): void {
    console.log(a);
    console.log(b);
}
foo(); // ok, default to { a: "", b: 0 }
foo(objectTemplate);