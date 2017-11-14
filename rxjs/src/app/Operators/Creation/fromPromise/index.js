import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';


const myPromise = (willReject) => {
    return new Promise((resolve, reject) => {
        if (willReject) {
            reject('Rejected!');
            return;
        }
        setTimeout(() => {
            resolve('Resolved!');
        }, 5500)
    })
};

/*
const sourcePromise = Observable
    .fromPromise(myPromise())
    .catch(error => console.log('chatch error', error));

const subscribe = sourcePromise.subscribe(
    val => console.log('VAL', val),
    // error => console.log('error', error) // catch triggered and no trigger
);*/


const source = Observable.of(false);
const example = source
    .mergeMap(val => Observable
            .fromPromise(myPromise(val))
        // .catch(error => Observable.of(`Error!11!: ${error}`))
    );
const subscribe = example.subscribe(
    val => console.log('Done: ', val),
);