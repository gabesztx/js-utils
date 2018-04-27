class Osztaly1 {
  numbValue: number;
  constructor() {
    this.numbValue = 12;
  }
  osszead(num: number) {
    return this.numbValue + num;
  }
}

class Osztaly2 extends Osztaly1 {
  constructor() {
    super();
  }
  // Osztaly1.osszead(8);
}

const osztaly2 = new Osztaly2();
// let osztaly1 = new Osztaly1();

console.log(osztaly2.osszead(8));
