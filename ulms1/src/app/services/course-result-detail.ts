import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpProxy } from './base/http-proxy.class';
import { data, data1 } from './course-result-detail-data';

@Injectable()
export class CourseResultDetail extends HttpProxy {

    constructor(protected http: Http) {
        super();
    }

    getCourseResultDetail(url: string): Promise<any> {
        const isServer = (<any>window).env === 'serv';
        return new Promise((resolve, reject) => {
            if (!isServer) {
                resolve(data1);
                // console.log('getCourseResultDetail', url);
            } else {
                // this.get(url).map(result => {});
            }
        });
    }



}
