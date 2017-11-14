import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

const source = Observable.timer(3000);
// const source = Observable.timer(2000, 500);
const subscribe = source.subscribe(val => console.log(val));