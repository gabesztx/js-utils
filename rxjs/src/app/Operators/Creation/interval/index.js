import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

const source = Observable.interval(1500);
const subscribe = source.subscribe(val => console.log(val));