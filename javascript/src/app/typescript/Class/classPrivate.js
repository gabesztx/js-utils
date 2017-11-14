"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal2 = (function () {
    function Animal2(theName) {
        this.name = theName;
        console.log('Animal2 contructor', this.name);
    }
    return Animal2;
}());
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, 'Rhino') || this;
    }
    return Rhino;
}(Animal2));
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal2("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
console.log(animal);
console.log(rhino);
console.log(employee);
animal = rhino;
console.log('animal private overwrite rhino', animal);
