class Grid {
    static origin = {x: 0, y: 0};

    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        console.log('calculateDistanceFromOrigin');
        return ((point.x + Grid.origin.x) * (point.y + Grid.origin.y)) + this.scale ;
    }

    constructor(public scale: number = 0) {
        console.log('this scale', scale);
    }
}

let grid1 = new Grid(10);
// let grid2 = new Grid(5);

console.log(grid1.calculateDistanceFromOrigin({x: 5, y: 5}));
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));