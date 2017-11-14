"use strict";
function loggingIdentity(arg) {
    return arg;
}
function loggingIdentityArray(arg) {
    console.log(arg.length);
    return arg;
}
console.log(loggingIdentityArray([1, 2, 3, 4]));
