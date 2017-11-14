import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

const source = Observable.of([1, 2, 3, 4, 5, 6]);
// const source = Observable.of({name: 'Brian'}, [1, 2, 3], function hello() {return 'Hello'});
const subscribe = source.subscribe((val) => {
    console.log(val)
});