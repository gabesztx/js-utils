import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

const arraySource = Observable.from([1,2,3,4,5]);
const subscribe = arraySource.subscribe(val => console.log(val));

/*
const promiseSource = Observable.from(new Promise(resolve => setTimeout(() => {
    resolve('done!')
}, 2000)));
const subscribe = promiseSource.subscribe(val => console.log(val));
*/


/*
const map = new Map();
map.set(1, 'Hi');
map.set(2, 'Bye');

const mapSource = Observable.from(map);
const subscribe = mapSource.subscribe(val => console.log(val));
*/

/*
const source = Observable.from('Hello World');
const subscribe = source.subscribe(val => console.log(val));
*/
