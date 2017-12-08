import { Injectable } from '@angular/core';

import { RequestOptions, Http } from '@angular/http';
import { HttpProxy } from './base/http-proxy.class';
import { RuntimeConfigService } from './runtime-config.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let __instance__: UserService = null;

@Injectable()
export class UserService extends HttpProxy {
    public userData: any;
    public apiUrl: any;

    constructor(protected http: Http, private config: RuntimeConfigService) {
        super();
        if (__instance__ !== this) {
            // url: api/userinfo
            this.apiUrl = `${this.config.baseApiUrl}userinfo`;
            __instance__ = this;
        }
        return __instance__;
    }

    getUser(): Observable<boolean> {
       /* return this.get(`${this.apiUrl}`)
            .map((result: any) => {
                this.userData = result;
                return result;
            });*/
       return Observable.of(true);
    }

    getUserData() {
        return this.userData;
    }
}
