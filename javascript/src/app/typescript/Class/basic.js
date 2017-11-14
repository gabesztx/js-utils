"use strict";
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter);
