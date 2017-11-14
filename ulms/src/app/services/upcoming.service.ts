import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { RestApiResponse } from './base/http.class';
import { CourseObject } from '../models/courseObject.model';

@Injectable()
export class UpcomingService {

    private _MockCourseResult = [{
        "courseActivities": [{
            "id": "831442e8-bf79-422c-9f30-ab0530f22823",
            "status": 1,
            "state": 3,
            "target": {
                "id": "50d49cbc-a9c8-4f7a-a68d-455d1dadfcd3",
                "title": "Root course object",
                "description": "",
                "createdAt": "2017-10-02T12:06:29Z",
                "requirement": {
                    "id": "50d49cbc-a9c8-4f7a-a68d-455d1dadfcd3",
                    "resultStartDate": "2017-12-01T23:00:00Z",
                    "resultEndDate": "2018-03-01T13:07:00Z",
                    "requiredForCompleted": true,
                    "requiredForSatisfied": true,
                    "rollupMethod": 2,
                    "progressWeight": 1.0,
                    "measureWeight": 1.0,
                    "netTimeLimit": 1000,
                    "grossTimeLimit": 3600,
                    "grossLimitBase": 1
                },
                "prerequisite": [],
                "label": ""
            },
            "result": {"remainingTime": 1000, "id": "831442e8-bf79-422c-9f30-ab0530f22823"},
            "links": []
        }],
        "courseRegistration": {
            "id": "232b4808-d5b9-4ee8-8d61-969da45033f1",
            "registrationDate": "2017-10-17T07:43:15Z",
            "forCredit": true,
            "contractStatus": 1
        },
        "courseState": 3,
        "id": "45b9f018-4c76-4139-988d-674c7aeb8bed",
        "title": "Winter is coming",
        "description": "\"Amikor leesik a hó, és fehér szelek fújnak, a magányos farkas elpusztul, de a falka életben marad.\"",
        "imageUrl": "https://4.bp.blogspot.com/-C1e38pRZy2A/VnPnCt3PpMI/AAAAAAAAB9M/6suciibx_5I/s1600/sarki-feny.jpg",
        "label": "\"Amikor leesik a hó, és fehér szelek fújnak, a magányos farkas elpusztul, de a falka életben marad.\"",
        "registration": {
            "id": "45b9f018-4c76-4139-988d-674c7aeb8bed",
            "startDate": "2017-10-02T12:09:00Z",
            "endDate": "9999-12-31T23:59:59Z",
            "code": "",
            "public": true,
            "invitation": true,
            "enroll": true
        },
        "courseObjects": [{
            "id": "50d49cbc-a9c8-4f7a-a68d-455d1dadfcd3",
            "title": "Root course object",
            "description": "",
            "createdAt": "2017-10-02T12:06:29Z",
            "requirement": {
                "id": "50d49cbc-a9c8-4f7a-a68d-455d1dadfcd3",
                "resultStartDate": "2017-12-01T23:00:00Z",
                "resultEndDate": "2018-03-01T13:07:00Z",
                "requiredForCompleted": true,
                "requiredForSatisfied": true,
                "rollupMethod": 2,
                "progressWeight": 1.0,
                "measureWeight": 1.0,
                "netTimeLimit": 1000,
                "grossTimeLimit": 3600,
                "grossLimitBase": 1
            },
            "prerequisite": [],
            "label": ""
        }],
        "createdAt": "2017-10-02T12:06:29Z",
        "provider": {"name": "Anonymus ", "id": "35f0bdea-bd9e-415a-b1c0-d360a3ce8a77"},
        "forCredit": true,
        "qualificationNotice": "",
        "accreditationNum": ""
    }];

    private pageSize = 1;

    private courseList = <Array<CourseObject>>JSON.parse(JSON.stringify(this._MockCourseResult.slice(0)));

    public getTotalPages(): number {
        return Math.ceil(this.courseList.length / this.pageSize);
    }

    public getList(pageNum?: number): Observable<RestApiResponse<Array<CourseObject>>> {

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
