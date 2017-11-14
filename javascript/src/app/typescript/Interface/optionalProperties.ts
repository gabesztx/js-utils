interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
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

// let mySquare = createSquare({color: "black"});
// let mySquare = createSquare({color: "black", width: 5});
// console.log(mySquare);