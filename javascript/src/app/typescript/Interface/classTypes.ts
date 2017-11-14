/*
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) {
        // console.log(this.currentTime);
        console.log(h);
        console.log(m);
    }
}
let clock = new Clock(10,14);
console.log(clock);*/

interface ICar{
    engine: string;
    color: string;
}

class Car implements ICar {
    /* private */
 /*   engine: string;
    color: string;
    constructor (engine: string, color: string) {
        console.log(engine);
        console.log(color);
    }*/

    /* public */
    constructor (public engine: string, public color: string) {
        console.log(engine);
        console.log(color);
    }
}

let car = new Car('skoda engine', 'piros');
console.log(car);