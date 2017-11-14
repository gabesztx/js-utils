/*
* What are Generic
*
* A Generics-ot a 0.9-es verzióban vezették be.
* Az általános típusok lehetővé teszik a kód újrafelhasználását a típusbiztonsággal.
* A belső algoritmus ugyanaz marad, csak a típus változik
* és eltűnik újra a fordítás során, és nem keletkeztet semmilyen mellékterméket a kapott JavaScripthez.
*/


/*
 * Why use generics
 *
 * A Generics minőséget nyújt a megoldáshoz azáltal,
 * hogy megadja a típusbiztonságot fordítási időben,
 * és csökkenti az ismétlődő programozási feladatokat,
 * általános típusú, absztrakciókat generálva az osztályokra és a módszerekre.
 */



function identity0(arg: number): number {
    return arg;
}
// console.log(identity0(10));

function identity1(arg: any): any {
    return arg;
}
// console.log(identity1(10));

function identity2<T>(arg: T): T {
    return arg;
}
// console.log(identity2(10));
// console.log(identity2('hello'));

let outputString = identity2<string>("myString");
let outputNumber = identity2<number>(100);
let outputObject = identity2<object>({x:0,y:0});
