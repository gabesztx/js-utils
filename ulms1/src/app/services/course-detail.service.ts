import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { HttpProxy } from './base/http-proxy.class';
import { RuntimeConfigService } from './runtime-config.service';

// let __instance__: CourseDetailService = null;

@Injectable()
export class CourseDetailService extends HttpProxy {
    // private apiUrl: string;
    public courseDetailData = { courseDetail: null, courseFeeds: null };
    public courseDetailId: any;

    constructor(protected http: Http, private config: RuntimeConfigService) {
        super();
       /* if (__instance__ !== this) {
            this.apiUrl = `${this.config.baseApiUrl}usercourses`;
            __instance__ = this;
        }
        return __instance__;*/
    }

    getCourseDetailData(): Observable<any> {
        const apiUrl = `${this.config.baseApiUrl}usercourses/${this.courseDetailId}`;
        return this.get(apiUrl).map(value => value);
    }

    getCourseFeedsData(): Observable<any> {
        const apiUrl = `${this.config.baseApiUrl}feeds/${this.courseDetailId}`;
        return this.get(apiUrl).map(value => value.items);
    }

    list(id?: string): Observable<any> {
        this.courseDetailId = id;
        return Observable.of(
            this.getCourseDetailData(),
            this.getCourseFeedsData()
        ).combineAll().map((results: Array<any>) => {
            // console.log('RESULT', results);
            this.courseDetailData.courseDetail = results[0];
            this.courseDetailData.courseFeeds = results[1];
            return this.courseDetailData;
        });
    }

    public getListData(): Observable<any> {
        return Observable.of(this.courseDetailData);
    }
}
