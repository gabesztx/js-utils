import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { RestApiResponse } from './base/http.class';
import { CourseObject } from '../models/courseObject.model';

@Injectable()
export class OptionalService {

    private _MockCourseResult = [
        {
            "course": {
                "id": "84917f82-b6ca-42ab-9236-5341441ed241",
                "title": "Winter is coming (Copy) (Copy) (Copy)",
                "description": "xgsdgdfd",
                "imageUrl": "https://4.bp.blogspot.com/-C1e38pRZy2A/VnPnCt3PpMI/AAAAAAAAB9M/6suciibx_5I/s1600/sarki-feny.jpg",
                "label": "sdfsgs",
                "registration": {
                    "id": "84917f82-b6ca-42ab-9236-5341441ed241",
                    "startDate": "2017-10-02T12:09:00Z",
                    "endDate": "9999-12-31T23:59:59Z",
                    "code": "",
                    "public": true,
                    "invitation": true,
                    "enroll": true
                },
                "courseObjects": [],
                "createdAt": "2017-10-02T13:03:38Z",
                "provider": {"name": "Anonymus ", "id": "35f0bdea-bd9e-415a-b1c0-d360a3ce8a77"},
                "qualificationNotice": "",
                "accreditationNum": ""
            },
            "courseObject": {
                "id": "c5e3fe25-e24b-40f3-87ce-45637a905f62",
                "title": "Root course object (Copy) (Copy) (Copy)",
                "description": "",
                "createdAt": "2017-10-02T13:03:38Z",
                "requirement": {
                    "id": "c5e3fe25-e24b-40f3-87ce-45637a905f62",
                    "resultStartDate": "2017-10-02T13:00:00Z",
                    "resultEndDate": "9999-12-31T23:59:59Z",
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
            /*"links": [{
                "rel": "Accept",
                "href": "https://devhome.nexiuslearning.com/invitation/M6Q0oBxdUUStqBeTjc-5JQ/accept",
                "target": "_self",
                "label": "Csatlakozás",
                "tooltip": ""
            }, {
                "rel": "Reject1",
                "href": "https://devhome.nexiuslearning.com/invitation/M6Q0oBxdUUStqBeTjc-5JQ/decline",
                "target": "_self",
                "label": "Elutasítás",
                "tooltip": ""
            }],*/
            "campaign": {
                "id": "564ccd27-5698-4c98-9d40-45cf2601f93b",
                "title": "#zs Üres lista kampány ",
                "label": "",
                "description": ""
            }
        },
        {
            "course": {
                "id": "b7e83b39-6da2-411a-901f-8bb79760698e",
                "title": "Winter is coming (Copy) (Copy)",
                "description": "",
                "imageUrl": "https://4.bp.blogspot.com/-C1e38pRZy2A/VnPnCt3PpMI/AAAAAAAAB9M/6suciibx_5I/s1600/sarki-feny.jpg",
                "label": "",
                "registration": {
                    "id": "b7e83b39-6da2-411a-901f-8bb79760698e",
                    "startDate": "2017-10-02T12:09:00Z",
                    "endDate": "9999-12-31T23:59:59Z",
                    "code": "",
                    "public": true,
                    "invitation": true,
                    "enroll": true
                },
                "courseObjects": [],
                "createdAt": "2017-10-02T12:46:06Z",
                "provider": {"name": "Anonymus ", "id": "35f0bdea-bd9e-415a-b1c0-d360a3ce8a77"},
                "qualificationNotice": "",
                "accreditationNum": ""
            },
            "courseObject": {
                "id": "c589f7bd-e8a1-4bd3-979b-c777abf734d9",
                "title": "Root course object (Copy) (Copy)",
                "description": "",
                "createdAt": "2017-10-02T12:46:06Z",
                "requirement": {
                    "id": "c589f7bd-e8a1-4bd3-979b-c777abf734d9",
                    "resultStartDate": "2017-12-01T23:00:00Z",
                    "resultEndDate": "9999-12-31T23:59:59Z",
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
            "campaign": {
                "id": "564ccd27-5698-4c98-9d40-45cf2601f93b",
                "title": "#zs Üres lista kampány ",
                "label": "",
                "description": ""
            }
        }, {
            "course": {
                "id": "9a86d5a7-3292-4d3f-b1c2-3dba425175d2",
                "title": "Winter is coming (Copy)",
                "description": "\"Amikor leesik a hó, és fehér szelek fújnak, a magányos farkas elpusztul, de a falka életben marad.\"",
                "imageUrl": "https://4.bp.blogspot.com/-C1e38pRZy2A/VnPnCt3PpMI/AAAAAAAAB9M/6suciibx_5I/s1600/sarki-feny.jpg",
                "label": "\"Amikor leesik a hó, és fehér szelek fújnak, a magányos farkas elpusztul, de a falka életben marad.\"",
                "registration": {
                    "id": "9a86d5a7-3292-4d3f-b1c2-3dba425175d2",
                    "startDate": "2017-10-02T12:09:00Z",
                    "endDate": "9999-12-31T23:59:59Z",
                    "code": "",
                    "public": true,
                    "invitation": true,
                    "enroll": true
                },
                "courseObjects": [],
                "createdAt": "2017-10-02T12:31:39Z",
                "provider": {"name": "Anonymus ", "id": "35f0bdea-bd9e-415a-b1c0-d360a3ce8a77"},
                "forCredit": true,
                "qualificationNotice": "",
                "accreditationNum": ""
            },
            "courseObject": {
                "id": "a36a8eac-44c2-4810-9cb4-1911153f33ca",
                "title": "Root course object (Copy)",
                "description": "",
                "createdAt": "2017-10-02T12:31:40Z",
                "requirement": {
                    "id": "a36a8eac-44c2-4810-9cb4-1911153f33ca",
                    "resultStartDate": "2017-12-01T23:00:00Z",
                    "resultEndDate": "9999-12-31T23:59:59Z",
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
            "campaign": {
                "id": "564ccd27-5698-4c98-9d40-45cf2601f93b",
                "title": "#zs Üres lista kampány ",
                "label": "",
                "description": ""
            }
        }];

    private pageSize = 3;

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
