import {Observable} from 'rxjs/Observable';

/*const hello = Observable.create((observer)=>{
    observer.next('Hello');
    observer.next('World');
});
const subscribe = hello.subscribe(val => console.log(val));
*/


const evenNumbers = Observable.create((observer) => {
    let value = 0;
    const interval = setInterval(() => {
        if (value % 2 === 0) {
            console.log('Next:', value);
            observer.next(value);
        }
        if (value === 4) {
            console.log('Unsubscribe!');
            subscribe.unsubscribe();
        }
        value++;
    }, 500);

    return () => clearInterval(interval);
});

const subscribe = evenNumbers.subscribe(val => console.log(val));
