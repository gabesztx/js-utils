import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

const source = Observable.fromEvent(document, 'click');
const example = source.map(event => `Event time: ${event.timeStamp}`);
const subscribe = example.subscribe(val => console.log(val));