import { Injectable } from '@angular/core';
import { RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { HttpProxy } from './base/http-proxy.class';
import { RuntimeConfigService } from './runtime-config.service';

let __instance__: CourseDetailFeedServices = null;

@Injectable()
export class CourseDetailFeedServices extends HttpProxy {
    private apiUrl: string;
    public courseDetailFeedData: any;
    public courseDetaiId: any;

    constructor(protected http: Http, private config: RuntimeConfigService) {
        super();

        if (__instance__ !== this) {

            this.apiUrl = `${this.config.baseApiUrl}feeds`;
            __instance__ = this;
        }

        return __instance__;
    }

    list(id?: string): Observable<any> {
        this.courseDetaiId = id;

        console.log('ID', this.courseDetaiId);
        console.log('GET LIST URL', `${this.apiUrl}/${id}`);

        return Observable.of(true);
        /*return this.get(`${this.apiUrl}/${id}`)
            .map((result: any) => {
                // this.courseDetailFeedData = {items: result};
                // return this.courseDetailFeedData;
                return {};
            });*/
    }
  /*  public getListData(): Observable<any> {
        return Observable.of(this.courseDetailData);
    }*/
}
