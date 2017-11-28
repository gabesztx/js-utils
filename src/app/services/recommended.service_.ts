import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { RestApiResponse } from './base/http.class';
import { CourseObject } from '../models/courseObject.model';

@Injectable()
export class RecommendedService_ {

    private _MockCourseResult = [{
        "courseObject": {
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
        "links": [{
            "rel": "Accept",
            "href": "https://devhome.nexiuslearning.com/invitation/M6Q0oBxdUUStqBeTjc-5JQ/accept",
            "target": "_self",
            "label": "Csatlakozás",
            "tooltip": ""
        }, {
            "rel": "Reject",
            "href": "https://devhome.nexiuslearning.com/invitation/M6Q0oBxdUUStqBeTjc-5JQ/decline",
            "target": "_self",
            "label": "Elutasítás",
            "tooltip": ""
        }],
        "id": "a034a433-5d1c-4451-ada8-17938dcfb925",
        "user": {"id": "d7c534b2-ae8d-4970-8dda-193f6cefbb67"},
        "email": "vilmos.gergo@nexius.hu",
        "course": {
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
            "courseObjects": [],
            "createdAt": "2017-08-02T09:16:27Z",
            "provider": {"name": "\"Hazuggyöngy\" Alapítvány", "id": "3f4598a4-ae09-458b-b0e0-d1b8a68a287f"},
            "forCredit": true,
            "qualificationNotice": "",
            "accreditationNum": ""
        },
        "creationDate": "2017-08-04T14:02:38Z",
        "invitation": {"severity": 3, "expiration": "9999-12-31T23:59:59Z"},
        "status": 1
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
        const items = courseList;
        // const items = courseList.slice(startItem, endItem);
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
