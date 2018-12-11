import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {
    console.log('AppComponent');
    /* function identity(arg: number): number {
       return arg;
     }*/

    /* TypeScript Enum */
    // const enumValue = Direction.Down;
    // console.log(Direction[0]);
    // const responseValue = Response[20];
    // console.log(responseValue);


    /* TypeScript Generic */
    // function identity<T>(arg: T): T {
    //   return arg;
    // }
    // let myIdentity: <T>(arg: T) => T = identity;
    // let output = identity<string>('String type')

    /* TypeScript Decorators */
    // const laptop: Laptop = new Laptop();
    // console.log(laptop['stickers']);
    /* TypeScript Mixins */
    // let smartObject:SmartObject = new SmartObject();
    // console.log(smartObject);
  }
}


// /* TypeScript */
//
// // import { Point } from './TypeScript/modell/point';
// // import { Direction } from './TypeScript/enum/direction';
// // import { Response } from './TypeScript/enum/response';
// // import { Laptop } from './TypeScript/shared/laptop';
// // import { SmartObject } from './TypeScript/mixins/sample';
//
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   constructor() {
//     console.log('AppComponent');
//     /* function identity(arg: number): number {
//        return arg;
//      }*/
//
//     /* TypeScript Enum */
//     // const enumValue = Direction.Down;
//     // console.log(Direction[0]);
//     // const responseValue = Response[20];
//     // console.log(responseValue);
//
//
//     /* TypeScript Generic */
//     // function identity<T>(arg: T): T {
//     //   return arg;
//     // }
//     // let myIdentity: <T>(arg: T) => T = identity;
//     // let output = identity<string>('String type')
//
//     /* TypeScript Decorators */
//     // const laptop: Laptop = new Laptop();
//     // console.log(laptop['stickers']);
//     /* TypeScript Mixins */
//     // let smartObject:SmartObject = new SmartObject();
//     // console.log(smartObject);
//   }
// }
