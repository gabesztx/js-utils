"use strict";
var Animal1 = (function () {
    function Animal1(theName) {
        this.name = theName;
        this.move();
    }
    Animal1.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + " m.");
    };
    return Animal1;
}());
var anim = new Animal1('Tomika a kígyó');
console.log(anim);
