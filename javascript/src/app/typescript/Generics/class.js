"use strict";
var GenericVale = (function () {
    function GenericVale() {
    }
    return GenericVale;
}());
var myGenericNumber = new GenericVale();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(10, 10));
var myGenericString = new GenericVale();
myGenericString.zeroValue = 'Ödön';
myGenericString.add = function (firstName, lastName) { return firstName + ' ' + lastName; };
console.log(myGenericString.add('Martus', 'Gaben'));
