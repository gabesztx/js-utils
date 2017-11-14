"use strict";
var objectTemplate = {
    a: "foo",
    b: 12,
};
function foo(_a) {
    var _b = _a === void 0 ? { a: "default strong", b: 0 } : _a, a = _b.a, b = _b.b;
    console.log(a);
    console.log(b);
}
foo();
foo(objectTemplate);
