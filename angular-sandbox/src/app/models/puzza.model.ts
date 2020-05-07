/*interface Pizza {
  name: string;
  toppings: string[];
}*/
class Pizza {
  label: string
  // constructor(public name: string, public toppings: string[]){
  constructor(){
    this.label = null;

  }
}

class PizzaMaker {
  // static create(event: Pizza){
  static create(){
    // return {name: event.name, toppings: event.toppings};
    return new Pizza();
  }
}

/*
class PizzaMaker {
  // static create(event: { name: string; toppings: string[] })
    return {name: event.name, toppings: event.toppings};
  }
}
*/


// const pizza = PizzaMaker.create();
// const pclass = new Pizza();
// console.log(pizza.label);
// const pizza = new Pizza('Inferno', ['cheese', 'peppers']);
// console.log(pizza);
// console.log(typeof pizzaMaker1);
// console.log(pizza);
// const pizzaMaker = new PizzaMaker();
// const pizza = pizzaMaker.create(new Pizza('gabesz', ['1', '2']));
// const pizzaMaker = PizzaMaker.create({name: 'Gabesz', toppings: ['t1', 't2']});
// console.log(typeof pizzaMaker);
// const pizza = new PizzaMaker().create({
//   name: 'Inferno',
//   toppings: ['cheese', 'peppers'],
// });
// console.log(pizza);
