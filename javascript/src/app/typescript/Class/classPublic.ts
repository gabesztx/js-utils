class Animal1 {
    public name: string;

    public constructor(theName: string) {
        this.name = theName;
        this.move();
    }

    public move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters} m.`);
    }
}

let anim = new Animal1('Tomika a kígyó');
console.log(anim);