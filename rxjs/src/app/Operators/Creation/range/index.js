import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/map';

const source = Observable.range(1,2).map(val => 'value' + val);
const subscribe = source.subscribe(val => console.log(val));