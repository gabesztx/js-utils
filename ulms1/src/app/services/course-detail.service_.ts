import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { RestApiResponse } from './base/http.class';

import { data1 } from './course-detail-data-1';
import { data2 } from './course-detail-data-2';
import { data3 } from './course-detail-data-3';
import { data4 } from './course-detail-data-4';
import { data5 } from './course-detail-data-5';

@Injectable()
export class CourseDetailService_ {

    private _MockCourseResult = data3;
    public courseList = <Array<any>>JSON.parse(JSON.stringify(this._MockCourseResult));
    public courseDetailData: any;
    public courseDetaiId: any;

    public list(id?: any): Observable<RestApiResponse<any>> {
        this.courseDetaiId = id;
        return Observable
            .of(this.courseList)
            .map(() => {
                this.courseDetailData = {items: this.courseList};
                return this.courseDetailData;
            });
    }

    public getListData(): Observable<any> {
        return Observable.of(this.courseDetailData)
    }
}


