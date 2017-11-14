import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

const source = Observable.throw('This is an error!');
//output: 'Error: This is an error!'
const subscribe = source.subscribe({
    next: val => console.log('val', val),
    complete: () => console.log('Complete!'),
    error: val => console.log(`Error: ${val}`)
});