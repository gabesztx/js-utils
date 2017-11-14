"use strict";
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        console.log('color');
        newSquare.color = config.color;
    }
    if (config.width) {
        console.log('width');
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
