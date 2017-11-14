"use strict";
var Car = (function () {
    function Car(engine, color) {
        this.engine = engine;
        this.color = color;
        console.log(engine);
        console.log(color);
    }
    return Car;
}());
var car = new Car('skoda engine', 'piros');
console.log(car);
