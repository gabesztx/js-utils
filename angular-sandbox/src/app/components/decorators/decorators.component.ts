import { Component, OnInit } from '@angular/core';

function Emoji() {
  return function(target: Object, key: string | symbol) {
    console.log('target: ', target);
    console.log('key: ', key);
    // let val = target[key];
    // const getter = () =>  {
    //   return val;
    // };
    // const setter = (next) => {
    //   console.log('updating flavor...');
    //   val = `🍦 ${next} 🍦`;
    // };
    // console.log(target);
  /*  Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });*/

  };
}


@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.scss']
})
export class DecoratorsComponent implements OnInit {
  @Emoji()
  flavor = 'vanilla';
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
    },3000)
  }

}
