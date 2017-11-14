import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { RestApiResponse } from './base/http.class';
import { CourseDetail } from '../models/courseDetail.model';

@Injectable()
export class ClosedService_ {
    private _MockCourseResult = [{
        "courseActivities": [{
            "id": "50dc3377-5eae-4022-bc8a-b44ba4884e2e",
            "status": 7,
            "state": 5,
            "target": {
                "id": "888b84a2-a0db-43eb-8e3f-e3e8e61054ff",
                "title": "Root course object (Copy) (Copy) (Copy) (Copy)",
                "description": "",
                "createdAt": "2017-10-02T13:07:05Z",
                "requirement": {
                    "id": "888b84a2-a0db-43eb-8e3f-e3e8e61054ff",
                    "resultStartDate": "2017-10-02T13:00:00Z",
                    "resultEndDate": "2017-10-02T13:10:00Z",
                    "requiredForCompleted": true,
                    "requiredForSatisfied": true,
                    "rollupMethod": 2,
                    "progressWeight": 1.0,
                    "measureWeight": 1.0,
                    "netTimeLimit": 1000,
                    "grossTimeLimit": 3600,
                    "grossLimitBase": 2
                },
                "prerequisite": [],
                "label": ""
            },
            "result": {
                "remainingTime": -22560,
                "id": "50dc3377-5eae-4022-bc8a-b44ba4884e2e",
                "finalResultDate": "2017-10-17T07:42:46Z",
                "resultEndTime": "2017-10-02T13:10:00Z"
            },
            "links": []
        }],
        "courseRegistration": {
            "id": "7ff6d3ab-4d2d-4641-8cd0-4fc3692bee1e",
            "registrationDate": "2017-10-17T07:42:46Z",
            "contractStatus": 1
        },
        "courseState": 5,
        "id": "9428e495-ac45-441e-9ad4-cb73092cfa5b",
        "title": "Winter is coming - lezárt",
        "description": "",
        "imageUrl": "https://az616578.vo.msecnd.net/files/2016/10/15/636121416961283174-683983684_full-moon-in-a-winter-night-1920x1080.jpg",
        "label": "",
        "registration": {
            "id": "9428e495-ac45-441e-9ad4-cb73092cfa5b",
            "startDate": "2017-10-02T12:09:00Z",
            "endDate": "9999-12-31T23:59:59Z",
            "code": "",
            "public": true,
            "invitation": true,
            "enroll": true
        },
        "courseObjects": [{
            "id": "888b84a2-a0db-43eb-8e3f-e3e8e61054ff",
            "title": "Root course object (Copy) (Copy) (Copy) (Copy)",
            "description": "",
            "createdAt": "2017-10-02T13:07:05Z",
            "requirement": {
                "id": "888b84a2-a0db-43eb-8e3f-e3e8e61054ff",
                "resultStartDate": "2017-10-02T13:00:00Z",
                "resultEndDate": "2017-10-02T13:10:00Z",
                "requiredForCompleted": true,
                "requiredForSatisfied": true,
                "rollupMethod": 2,
                "progressWeight": 1.0,
                "measureWeight": 1.0,
                "netTimeLimit": 1000,
                "grossTimeLimit": 3600,
                "grossLimitBase": 2
            },
            "prerequisite": [],
            "label": ""
        }],
        "createdAt": "2017-10-02T13:07:05Z",
        "provider": {"name": "Anonymus ", "id": "35f0bdea-bd9e-415a-b1c0-d360a3ce8a77"},
        "qualificationNotice": "",
        "accreditationNum": ""
    }];


    private pageSize = 1;
    private courseList = <Array<CourseDetail>>JSON.parse(JSON.stringify(this._MockCourseResult.slice(0)));


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
}
