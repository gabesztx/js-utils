function setName() {
  return function (target: Object, key: string | symbol) {
    let value = target[key];
    const getter = () => {
      return value;
    };
    const setter = (next) => {
      value = `🍦 ${next} 🍦`;
    };
    // transform property
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}


export class Greeter {
  @setName()
  public name: string = 'Default';

  constructor() {
  }
}


const greeter = new Greeter();
console.log(greeter.name);
greeter.name = 'Ödönke';
console.log(greeter.name);
