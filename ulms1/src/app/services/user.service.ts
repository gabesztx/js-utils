import { Injectable } from '@angular/core';

import { RequestOptions, Http } from '@angular/http';
import { HttpProxy } from './base/http-proxy.class';
import { RuntimeConfigService } from './runtime-config.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/operator/delay';

let __instance__: UserService = null;

const LOCAL_USER = {
    userGuid: '7e2bf990-8496-4523-9138-8573b4c52579',
    loggedIn: true,
    name: 'Martus Gábor',
    email: 'martus.gabor@nexius.hu',
    role: 1,
    // contextLogin: true
};

@Injectable()
export class UserService extends HttpProxy {
    public userData: any;
    public apiUrl: any;

    constructor(protected http: Http, private config: RuntimeConfigService) {
        super();
        if (__instance__ !== this) {
            this.apiUrl = `${this.config.baseApiUrl}userinfo`;
            __instance__ = this;
        }
        return __instance__;
    }

    getUser(): Observable<boolean> | any {
        const isServer = (<any>window).env === 'serv';
        if (isServer) {
            return this.get(`${this.apiUrl}`)
                .map((result: any) => {
                    this.userData = result;
                    return result;
                });
        } else {
            this.userData = LOCAL_USER ;
            return Observable.of(this.userData);
        }

    }

    getUserData() {
        return this.userData;
    }
}
