import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { RestApiResponse } from './base/http.class';
import { CourseDetail } from '../models/courseDetail.model';


import { data1 } from './course-service-data1';
import { data2 } from './course-service-data2';
import { data3 } from './course-service-data3';
import { data4 } from './course-service-data4';

@Injectable()
export class CourseService_ {

    private _MockCourseResult = data3;

    private pageSize = 15;
    private courseList = <Array<CourseDetail>>JSON.parse(JSON.stringify(this._MockCourseResult.slice(0)));
    public modalInstance: any;

    public getTotalPages(): number {
        return Math.ceil(this.courseList.length / this.pageSize);
    }

    public getList(pageNum ?: number): Observable<RestApiResponse<Array<CourseDetail>>> {
        const startItem = (pageNum - 1) * this.pageSize;
        const endItem = startItem + this.pageSize;
        const courseList = this.courseList;
        const items = courseList.slice(startItem, endItem);
        const totalPages = this.getTotalPages();

        return Observable.of(items).map((list) => {
            return {
                hasNextPage: (pageNum < totalPages),
                items: items,
                currentPage: pageNum,
                pageSize: this.pageSize,
                total: courseList.length,
                totalPages: totalPages
            };
        });
    }


    public setModalInstance(modalScope) {
        this.modalInstance = modalScope;
        // console.log('setModalInstance');
        setTimeout(() => {
            // this.modalInstance.openModal();
            // console.log(this.modalInstance);
        }, 3000)
    }
}
