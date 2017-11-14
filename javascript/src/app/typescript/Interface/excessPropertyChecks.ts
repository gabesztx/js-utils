interface SquareConfig {
    color?: string;
    width?: number;
}


/*function createSquare(config: SquareConfig): { color: string; width: number } {
    // ...
}*/

//let mySquare = createSquare({ colour: "red", width: 100 });
//let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig)


let squareOptions = { colour: "red", width: 100 };

console.log(squareOptions);

/* nem használható */