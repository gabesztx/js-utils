import { Injectable } from '@angular/core';
import { RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { HttpProxy } from './base/http-proxy.class';
import { RuntimeConfigService } from './runtime-config.service';

let __instance__: CourseDetailService = null;

@Injectable()
export class CourseDetailService extends HttpProxy {
    private apiUrl: string;

    constructor(protected http: Http, private config: RuntimeConfigService) {
        super();

        if (__instance__ !== this) {

            this.apiUrl = `${this.config.baseApiUrl}usercourses`;
            __instance__ = this;
        }

        return __instance__;
    }

    list(id?: string): Observable<any> {
        return this.get(`${this.apiUrl}/${id}`)
            .map((result: any) => {
                return {
                    items: [result]
                };
            });
    }
}
