import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {

    constructor() { }

    init(): Observable<boolean> {
        return Observable.of(true);
    }

}
