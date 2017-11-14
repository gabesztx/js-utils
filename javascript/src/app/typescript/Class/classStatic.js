"use strict";
var Grid = (function () {
    function Grid(scale) {
        if (scale === void 0) { scale = 0; }
        this.scale = scale;
        console.log('this scale', scale);
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        console.log('calculateDistanceFromOrigin');
        return ((point.x + Grid.origin.x) * (point.y + Grid.origin.y)) + this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(10);
console.log(grid1.calculateDistanceFromOrigin({ x: 5, y: 5 }));
