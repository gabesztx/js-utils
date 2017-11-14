import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';

/*const example = Observable.empty();
const subscribe = example.subscribe({
    next: (val) => console.log('Next', val),
    complete: () => console.log('Complete!')
});*/

const result = Observable.empty().startWith(5);
const subscribe = result.subscribe({
    next: (val) => console.log('Next', val),
    complete: () => console.log('Complete!',)
});

