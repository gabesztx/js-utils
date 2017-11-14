import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {
    public userData: any;
    constructor() {}
    init(): Observable<boolean> {
        //url: api/userinfo
        return Observable.of(true);
    }

    getUser(){}
}
