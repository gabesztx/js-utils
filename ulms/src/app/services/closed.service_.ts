import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { RestApiResponse } from './base/http.class';
import { CourseDetail } from '../models/courseDetail.model';

@Injectable()
export class ClosedService_ {
    private _MockCourseResult = [{
        "courseActivities": [{
            "id": "7aae6942-c8b3-45d6-b06d-2c45be717ba8",
            "status": 7,
            "state": 5,
            "target": {
                "id": "22d779aa-cb71-4346-9a2f-9bf1f6cc168a",
                "title": "Root course object (Copy) (Copy)",
                "description": "",
                "createdAt": "2017-10-30T10:13:52Z",
                "requirement": {
                    "id": "22d779aa-cb71-4346-9a2f-9bf1f6cc168a",
                    "resultStartDate": "2017-10-30T10:14:00Z",
                    "resultEndDate": "2018-01-27T12:00:00Z",
                    "requiredForCompleted": true,
                    "requiredForSatisfied": true,
                    "rollupMethod": 2,
                    "progressWeight": 1.0,
                    "measureWeight": 1.0,
                    "grossTimeLimit": 5,
                    "grossLimitBase": 2
                },
                "prerequisite": [],
                "label": ""
            },
            "result": {
                "remainingTime": -20726,
                "id": "7aae6942-c8b3-45d6-b06d-2c45be717ba8",
                "finalResultDate": "2017-11-14T15:51:53Z",
                "resultEndTime": "2017-11-14T15:51:45Z"
            },
            "links": []
        }],
        "courseRegistration": {
            "id": "dfaeef50-29ab-4e16-91ee-018019f9b85d",
            "registrationDate": "2017-11-14T15:46:45Z",
            "forCredit": true,
            "contractStatus": 1
        },
        "courseState": 5,
        "id": "7f2f35b8-92d7-4782-ac5c-a71e65efecc4",
        "title": "Refoktor_lezárt",
        "description": "fafasydfcsydf",
        "imageUrl": "https://blog.valdosta.edu/it/wp-content/uploads/sites/19/2015/02/Bussines-Information-Technology-Images.jpg",
        "label": "sdfyadfsd",
        "registration": {
            "id": "7f2f35b8-92d7-4782-ac5c-a71e65efecc4",
            "startDate": "1753-01-01T12:00:00Z",
            "endDate": "9999-12-31T23:59:59Z",
            "code": "",
            "public": true,
            "invitation": true,
            "enroll": true
        },
        "courseObjects": [{
            "id": "22d779aa-cb71-4346-9a2f-9bf1f6cc168a",
            "title": "Root course object (Copy) (Copy)",
            "description": "",
            "createdAt": "2017-10-30T10:13:52Z",
            "requirement": {
                "id": "22d779aa-cb71-4346-9a2f-9bf1f6cc168a",
                "resultStartDate": "2017-10-30T10:14:00Z",
                "resultEndDate": "2018-01-27T12:00:00Z",
                "requiredForCompleted": true,
                "requiredForSatisfied": true,
                "rollupMethod": 2,
                "progressWeight": 1.0,
                "measureWeight": 1.0,
                "grossTimeLimit": 5,
                "grossLimitBase": 2
            },
            "prerequisite": [],
            "label": ""
        }],
        "createdAt": "2017-10-30T10:13:52Z",
        "provider": { "name": "\"Hajdútánc\" Alapfokú Művészeti Iskola", "id": "688ad4e6-f124-43f0-93e7-00ece53bb315" },
        "forCredit": true,
        "qualificationNotice": "",
        "accreditationNum": ""
    }, {
        "courseActivities": [{
            "id": "ac2ad8ee-b643-455e-98eb-0e7c07c572e1",
            "status": 7,
            "state": 5,
            "target": {
                "id": "ccccde0b-8bfa-453e-a36b-9bf51ee05470",
                "title": "Root course object",
                "description": "",
                "createdAt": "2017-08-02T09:16:27Z",
                "requirement": {
                    "id": "ccccde0b-8bfa-453e-a36b-9bf51ee05470",
                    "resultStartDate": "2017-08-04T14:47:00Z",
                    "resultEndDate": "2017-10-04T14:47:00Z",
                    "requiredForCompleted": true,
                    "requiredForSatisfied": true,
                    "rollupMethod": 2,
                    "progressWeight": 1.0,
                    "measureWeight": 1.0,
                    "grossLimitBase": 1
                },
                "prerequisite": [],
                "label": ""
            },
            "result": {
                "remainingTime": -79831,
                "id": "ac2ad8ee-b643-455e-98eb-0e7c07c572e1",
                "finalResultDate": "2017-10-05T12:44:51Z"
            },
            "links": []
        }],
        "courseRegistration": {
            "id": "a8602ab8-c609-4f4b-8e56-f4c4fd24f566",
            "registrationDate": "2017-09-15T08:19:17Z",
            "forCredit": true,
            "contractStatus": 1,
            "licenseNetTimeLimit": 600,
            "licenseGrossTimeLimitDate": "9999-12-31T23:59:59Z",
            "licenseTimeSpentInThisPeriod": 0
        },
        "courseState": 5,
        "id": "0adf7792-1ced-4700-8eff-7ba752729769",
        "title": "#g [otf: 2769] bakter?",
        "description": "Csörgeszés a zönzér kuvó neveztesében hadozta azt a hedést, amit a szorzalan apár, vagy a frezomok egerkede sündösött ránság, illetve a csókos porlának. Könyökő bolás kuvójának rizetei, a parné szülött neveztesének köldsége, vitat gomor bogázsának csalita sározja vissza kondrosvádban is azt a bális talományot, amelyben elet retőjének rabbija karénált. Rinál gyönyögély pajtorga mató tatilona, saját hongonájában. Ez az üzés a tőzsdély kregből sunyos nyugalan és szusztó zsamusok garinájában csikacsolja a terce környőjét vatós bolhatlatosakat: az alányokat, pizsgárokat, mesztékeket, valamint az ellenük való tátlan álgásokat és a jáncos tetehejket. A csökhe verjék tekedő hanciójára való tekintettel a para végén betes nyikalát furulja - henységhez kapcsolva - a jelenleg tatagos karára hiszeges mondugályokat. A pítás mató jáncos tisztő hunya vező, egyelés lözlés, solta fogás és kurnaldás olomság bölönében a parfampa kendőnél sündös meg. Sajszerű béna, dagos álgás arra abzódják a mintyeket, hogy mindent epedjenek vinizmus metéséért.",
        "imageUrl": "",
        "label": "#g [otf: 2769]",
        "registration": {
            "id": "0adf7792-1ced-4700-8eff-7ba752729769",
            "startDate": "1753-01-01T12:00:00Z",
            "endDate": "2018-02-08T10:23:00Z",
            "code": "",
            "invitation": true,
            "enroll": true
        },
        "courseObjects": [{
            "id": "ccccde0b-8bfa-453e-a36b-9bf51ee05470",
            "title": "Root course object",
            "description": "",
            "createdAt": "2017-08-02T09:16:27Z",
            "requirement": {
                "id": "ccccde0b-8bfa-453e-a36b-9bf51ee05470",
                "resultStartDate": "2017-08-04T14:47:00Z",
                "resultEndDate": "2017-10-04T14:47:00Z",
                "requiredForCompleted": true,
                "requiredForSatisfied": true,
                "rollupMethod": 2,
                "progressWeight": 1.0,
                "measureWeight": 1.0,
                "grossLimitBase": 1
            },
            "prerequisite": [],
            "label": ""
        }],
        "createdAt": "2017-08-02T09:16:27Z",
        "provider": { "name": "\"Hazuggyöngy\" Alapítvány", "id": "3f4598a4-ae09-458b-b0e0-d1b8a68a287f" },
        "forCredit": true,
        "qualificationNotice": "",
        "accreditationNum": ""
    }, {
        "courseActivities": [{
            "id": "f7614175-29dd-4a9a-aa46-571e8224d80a",
            "status": 7,
            "state": 5,
            "target": {
                "id": "2af51187-54ca-4ea8-84da-5147835638be",
                "title": "Root course object",
                "description": "",
                "createdAt": "2016-10-17T13:22:56Z",
                "requirement": {
                    "id": "2af51187-54ca-4ea8-84da-5147835638be",
                    "resultStartDate": "2016-10-17T13:23:00Z",
                    "resultEndDate": "2017-10-16T13:24:00Z",
                    "exemptionForCompleted": true,
                    "exemptionForSatisfied": true,
                    "requiredForCompleted": true,
                    "requiredForSatisfied": true,
                    "rollupMethod": 2,
                    "progressWeight": 1.0,
                    "measureWeight": 1.0,
                    "netTimeLimit": 60000,
                    "grossTimeLimit": 600000,
                    "grossLimitBase": 2,
                    "netLimitOverride": true,
                    "grossLimitOverride": true,
                    "alwaysAvailable": true
                },
                "prerequisite": [],
                "label": ""
            },
            "result": {
                "remainingTime": 2147483647,
                "id": "f7614175-29dd-4a9a-aa46-571e8224d80a",
                "finalResultDate": "2017-10-16T13:46:29Z",
                "resultEndTime": "2017-10-16T13:24:00Z"
            },
            "links": []
        }],
        "courseRegistration": {
            "id": "6d01f807-c1a2-4b87-83ab-8bce3ed302b5",
            "registrationDate": "2016-10-17T15:11:10Z",
            "forCredit": true,
            "registrarOrganization": { "id": "f3f64ff6-058b-4b16-a4d5-58e7bb8185cc" },
            "contractStatus": 1
        },
        "courseState": 5,
        "id": "9611e40b-db98-48e0-8f8e-4b9f9ce25726",
        "title": "_g Újabb gross time-os kurzus",
        "description": "Ebbe talán be lehet regisztrálni...",
        "imageUrl": "",
        "label": "_g Újabb gross time-os kurzus",
        "registration": {
            "id": "9611e40b-db98-48e0-8f8e-4b9f9ce25726",
            "startDate": "2016-10-17T13:22:00Z",
            "endDate": "2017-10-17T13:22:00Z",
            "code": "",
            "public": true,
            "invitation": true,
            "enroll": true
        },
        "courseObjects": [{
            "id": "2af51187-54ca-4ea8-84da-5147835638be",
            "title": "Root course object",
            "description": "",
            "createdAt": "2016-10-17T13:22:56Z",
            "requirement": {
                "id": "2af51187-54ca-4ea8-84da-5147835638be",
                "resultStartDate": "2016-10-17T13:23:00Z",
                "resultEndDate": "2017-10-16T13:24:00Z",
                "exemptionForCompleted": true,
                "exemptionForSatisfied": true,
                "requiredForCompleted": true,
                "requiredForSatisfied": true,
                "rollupMethod": 2,
                "progressWeight": 1.0,
                "measureWeight": 1.0,
                "netTimeLimit": 60000,
                "grossTimeLimit": 600000,
                "grossLimitBase": 2,
                "netLimitOverride": true,
                "grossLimitOverride": true,
                "alwaysAvailable": true
            },
            "prerequisite": [],
            "label": ""
        }],
        "createdAt": "2016-10-17T13:22:56Z",
        "provider": { "name": "Nexius", "id": "b3ae61e1-4059-482d-ba38-497c194b7738" },
        "forCredit": true,
        "qualificationNotice": "",
        "accreditationNum": ""
    }, {
        "courseActivities": [{
            "id": "c5cf490f-ac2a-4771-be2e-f32671c20760",
            "status": 7,
            "state": 5,
            "target": {
                "id": "cc9cbaa1-1b44-450b-bfa7-493231140ac5",
                "title": "Root course object",
                "description": "",
                "createdAt": "2016-10-17T11:15:35Z",
                "requirement": {
                    "id": "cc9cbaa1-1b44-450b-bfa7-493231140ac5",
                    "resultStartDate": "2016-10-17T11:21:00Z",
                    "resultEndDate": "2017-10-17T11:21:00Z",
                    "exemptionForCompleted": true,
                    "exemptionForSatisfied": true,
                    "requiredForSatisfied": true,
                    "rollupMethod": 2,
                    "progressWeight": 1.0,
                    "measureWeight": 1.0,
                    "netTimeLimit": 60000,
                    "grossTimeLimit": 600000,
                    "grossLimitBase": 2,
                    "netLimitOverride": true,
                    "grossLimitOverride": true,
                    "alwaysAvailable": true
                },
                "prerequisite": [],
                "label": ""
            },
            "result": {
                "remainingTime": 2147483647,
                "id": "c5cf490f-ac2a-4771-be2e-f32671c20760",
                "finalResultDate": "2017-10-17T13:42:46Z",
                "resultEndTime": "2017-10-17T11:21:00Z"
            },
            "links": []
        }],
        "courseRegistration": {
            "id": "2d1ec766-b4c2-4888-a4c2-dd2289b6b369",
            "registrationDate": "2016-10-17T14:10:32Z",
            "forCredit": true,
            "registrarOrganization": { "id": "bf5d81e6-9990-45e3-b661-c9498d44f83f" },
            "contractStatus": 1
        },
        "courseState": 5,
        "id": "a7a16fb5-5955-4fec-b0b6-a56719d92aba",
        "title": "_g Gross time limit-es",
        "description": "Állítható, dátumos gross time limit override, registration date kezdettel.",
        "imageUrl": "",
        "label": "_g Gross time limit-es",
        "registration": {
            "id": "a7a16fb5-5955-4fec-b0b6-a56719d92aba",
            "startDate": "2016-10-17T11:22:00Z",
            "endDate": "2017-10-17T11:22:00Z",
            "code": "",
            "public": true,
            "enroll": true
        },
        "courseObjects": [{
            "id": "cc9cbaa1-1b44-450b-bfa7-493231140ac5",
            "title": "Root course object",
            "description": "",
            "createdAt": "2016-10-17T11:15:35Z",
            "requirement": {
                "id": "cc9cbaa1-1b44-450b-bfa7-493231140ac5",
                "resultStartDate": "2016-10-17T11:21:00Z",
                "resultEndDate": "2017-10-17T11:21:00Z",
                "exemptionForCompleted": true,
                "exemptionForSatisfied": true,
                "requiredForSatisfied": true,
                "rollupMethod": 2,
                "progressWeight": 1.0,
                "measureWeight": 1.0,
                "netTimeLimit": 60000,
                "grossTimeLimit": 600000,
                "grossLimitBase": 2,
                "netLimitOverride": true,
                "grossLimitOverride": true,
                "alwaysAvailable": true
            },
            "prerequisite": [],
            "label": ""
        }],
        "createdAt": "2016-10-17T11:15:34Z",
        "forCredit": true,
        "qualificationNotice": "",
        "accreditationNum": ""
    }];


    private pageSize = 5;
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
