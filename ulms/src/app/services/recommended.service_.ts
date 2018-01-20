import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { RestApiResponse } from './base/http.class';
import { CourseObject } from '../models/courseObject.model';

@Injectable()
export class RecommendedService_ {

    private _MockCourseResult = [{
        "courseObject": {
            "id": "804d783e-120a-4a0d-bf98-eb51c0694a8a",
            "title": "Root course object",
            "description": "",
            "createdAt": "2017-04-24T14:15:53Z",
            "requirement": {
                "id": "804d783e-120a-4a0d-bf98-eb51c0694a8a",
                "resultStartDate": "1753-01-01T12:00:00Z",
                "resultEndDate": "9999-12-31T23:59:59Z",
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
            "href": "https://devhome.nexiuslearning.com/invitation/jsJKpAdN9EWFOk_u0HBQtg/accept",
            "target": "_self",
            "label": "Csatlakoz·s",
            "tooltip": ""
        }, {
            "rel": "Reject",
            "href": "https://devhome.nexiuslearning.com/invitation/jsJKpAdN9EWFOk_u0HBQtg/decline",
            "target": "_self",
            "label": "ElutasÌt·s",
            "tooltip": ""
        }],
        "id": "a44ac28e-4d07-45f4-853a-4feed07050b6",
        "user": { "id": "7e2bf990-8496-4523-9138-8573b4c52579" },
        "email": "martus.gabor@nexius.hu",
        "course": {
            "id": "8fda4638-05ec-40ba-b44c-eb5b360fddee",
            "title": "aaaa",
            "description": "",
            "imageUrl": "",
            "label": "",
            "registration": {
                "id": "8fda4638-05ec-40ba-b44c-eb5b360fddee",
                "startDate": "1753-01-01T12:00:00Z",
                "endDate": "9999-12-31T23:59:59Z",
                "code": "",
                "invitation": true,
                "enroll": true
            },
            "courseObjects": [],
            "createdAt": "2017-04-24T14:15:53Z",
            "qualificationNotice": "",
            "accreditationNum": "",
            "isLocked": true
        },
        "creationDate": "2017-12-13T12:09:50Z",
        "invitation": {
            "organization": {
                "name": "\"ADU-val EurÛp·ba\" AlapÌtv·ny KevÈsbÈ Rˆvid Neve-",
                "id": "c18eddbf-7d0f-46df-9c65-ece227af2fb5"
            }, "severity": 3, "expiration": "9999-12-31T23:59:59Z"
        },
        "status": 1
    }, {
        "courseObject": {
            "id": "b1fe7159-243d-4ef1-a7c1-674052af79e1",
            "title": "Root course object",
            "description": "",
            "createdAt": "2017-02-14T13:44:57Z",
            "requirement": {
                "id": "b1fe7159-243d-4ef1-a7c1-674052af79e1",
                "resultStartDate": "1753-01-01T12:00:00Z",
                "resultEndDate": "9999-12-31T23:59:59Z",
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
            "href": "https://devhome.nexiuslearning.com/invitation/iUsxYB8S8E6qsS21r7zaew/accept",
            "target": "_self",
            "label": "Csatlakoz·s",
            "tooltip": ""
        }, {
            "rel": "Reject",
            "href": "https://devhome.nexiuslearning.com/invitation/iUsxYB8S8E6qsS21r7zaew/decline",
            "target": "_self",
            "label": "ElutasÌt·s",
            "tooltip": ""
        }],
        "id": "60314b89-121f-4ef0-aab1-2db5afbcda7b",
        "user": { "id": "7e2bf990-8496-4523-9138-8573b4c52579" },
        "email": "martus.gabor@nexius.hu",
        "course": {
            "id": "d9b5d890-6ed2-4649-8a05-d90097b4737d",
            "title": "[otf: 2548] w COs",
            "description": "",
            "imageUrl": "",
            "label": "[otf: 2548] w COs",
            "registration": {
                "id": "d9b5d890-6ed2-4649-8a05-d90097b4737d",
                "startDate": "1753-01-01T12:00:00Z",
                "endDate": "9999-12-31T23:59:59Z",
                "code": "",
                "invitation": true,
                "enroll": true
            },
            "courseObjects": [],
            "createdAt": "2017-02-14T13:44:57Z",
            "forCredit": true,
            "qualificationNotice": "",
            "accreditationNum": ""
        },
        "creationDate": "2017-12-13T12:08:56Z",
        "invitation": { "severity": 3, "expiration": "9999-12-31T23:59:59Z" },
        "status": 1
    }, {
        "courseObject": {
            "id": "aeb1e172-713f-4fb9-9978-036ab59fbca2",
            "title": "Root course object (M·solat) (M·solat)",
            "description": "",
            "createdAt": "2016-08-24T11:08:25Z",
            "requirement": {
                "id": "aeb1e172-713f-4fb9-9978-036ab59fbca2",
                "resultStartDate": "2016-08-24T11:09:00Z",
                "resultEndDate": "9999-12-31T23:59:59Z",
                "requiredForCompleted": true,
                "requiredForSatisfied": true,
                "rollupMethod": 2,
                "progressWeight": 1.0,
                "measureWeight": 1.0,
                "suggestedTime": 2,
                "grossLimitBase": 1
            },
            "prerequisite": [],
            "label": "TestLabel"
        },
        "links": [{
            "rel": "Accept",
            "href": "https://devhome.nexiuslearning.com/invitation/EpmqL5oCvUu5FbEdv1KPgg/accept",
            "target": "_self",
            "label": "Csatlakoz·s",
            "tooltip": ""
        }, {
            "rel": "Reject",
            "href": "https://devhome.nexiuslearning.com/invitation/EpmqL5oCvUu5FbEdv1KPgg/decline",
            "target": "_self",
            "label": "ElutasÌt·s",
            "tooltip": ""
        }],
        "id": "2faa9912-029a-4bbd-b915-b11dbf528f82",
        "user": { "id": "7e2bf990-8496-4523-9138-8573b4c52579" },
        "email": "martus.gabor@nexius.hu",
        "course": {
            "id": "0d170bdb-60c4-48cd-9f33-7d578caa8f62",
            "title": "Teszt kurzusdsfdsgfadsfg",
            "description": "leÌr·s, m˚kˆdı tananyagokkal, plz ne szerkezd!",
            "imageUrl": "https://baconmockup.com/300/300/",
            "label": "",
            "registration": {
                "id": "0d170bdb-60c4-48cd-9f33-7d578caa8f62",
                "startDate": "1753-01-01T12:00:00Z",
                "endDate": "9999-12-31T23:59:59Z",
                "code": "",
                "public": true,
                "invitation": true,
                "enroll": true,
                "learningToolsEnabled": true,
                "registrarOrganizationOverride": true
            },
            "courseObjects": [],
            "createdAt": "2016-08-24T11:08:23Z",
            "provider": { "name": "Nexius", "id": "b3ae61e1-4059-482d-ba38-497c194b7738" },
            "forCredit": true,
            "qualificationNotice": "",
            "accreditationNum": ""
        },
        "creationDate": "2017-12-13T12:07:01Z",
        "invitation": { "severity": 3, "expiration": "9999-12-31T23:59:59Z" },
        "status": 1
    }, {
        "courseObject": {
            "id": "dfa612da-2df4-4b08-99e9-1f532be0b61d",
            "title": "Root course object (Copy) (Copy) (Copy) (Copy)",
            "description": "",
            "createdAt": "2017-12-13T10:11:15Z",
            "requirement": {
                "id": "dfa612da-2df4-4b08-99e9-1f532be0b61d",
                "resultStartDate": "1753-01-01T12:00:00Z",
                "resultEndDate": "9999-12-31T23:59:59Z",
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
            "href": "https://devhome.nexiuslearning.com/invitation/uOgzmJHo7kiyZvsHA4ud1w/accept",
            "target": "_self",
            "label": "Csatlakoz·s",
            "tooltip": ""
        }, {
            "rel": "Reject",
            "href": "https://devhome.nexiuslearning.com/invitation/uOgzmJHo7kiyZvsHA4ud1w/decline",
            "target": "_self",
            "label": "ElutasÌt·s",
            "tooltip": ""
        }],
        "id": "9833e8b8-e891-48ee-b266-fb07038b9dd7",
        "user": { "id": "7e2bf990-8496-4523-9138-8573b4c52579" },
        "email": "martus.gabor@nexius.hu",
        "course": {
            "id": "96bf03e7-1266-4cf6-a18e-6dd270800b4e",
            "title": "Refoktor_aktÌv (Copy) (Copy) (Copy)",
            "description": "",
            "imageUrl": "",
            "label": "",
            "registration": {
                "id": "96bf03e7-1266-4cf6-a18e-6dd270800b4e",
                "startDate": "1753-01-01T12:00:00Z",
                "endDate": "9999-12-31T23:59:59Z",
                "code": "",
                "public": true,
                "invitation": true,
                "enroll": true
            },
            "courseObjects": [],
            "createdAt": "2017-12-13T10:11:14Z",
            "provider": {
                "name": "\"Hajd˙t·nc\" Alapfok˙ M˚vÈszeti Iskola",
                "id": "688ad4e6-f124-43f0-93e7-00ece53bb315"
            },
            "qualificationNotice": "",
            "accreditationNum": ""
        },
        "creationDate": "2017-12-13T10:11:50Z",
        "invitation": { "severity": 3, "expiration": "9999-12-31T23:59:59Z" },
        "status": 1
    }, {
        "courseObject": {
            "id": "792a5c07-851b-4638-b281-9d554638e632",
            "title": "Root course object (Copy)",
            "description": "",
            "createdAt": "2017-10-30T10:28:37Z",
            "requirement": {
                "id": "792a5c07-851b-4638-b281-9d554638e632",
                "resultStartDate": "2017-10-30T10:19:00Z",
                "resultEndDate": "9999-12-31T23:59:59Z",
                "requiredForCompleted": true,
                "requiredForSatisfied": true,
                "rollupMethod": 2,
                "progressWeight": 1.0,
                "measureWeight": 1.0,
                "suggestedTime": 15,
                "minimumTime": 10,
                "grossLimitBase": 1
            },
            "prerequisite": [],
            "label": ""
        },
        "links": [{
            "rel": "Accept",
            "href": "https://devhome.nexiuslearning.com/invitation/UcTRQCHbR0SK9fN77v8g3w/accept",
            "target": "_self",
            "label": "Csatlakoz·s",
            "tooltip": ""
        }, {
            "rel": "Reject",
            "href": "https://devhome.nexiuslearning.com/invitation/UcTRQCHbR0SK9fN77v8g3w/decline",
            "target": "_self",
            "label": "ElutasÌt·s",
            "tooltip": ""
        }],
        "id": "40d1c451-db21-4447-8af5-f37beeff20df",
        "user": { "id": "7e2bf990-8496-4523-9138-8573b4c52579" },
        "email": "martus.gabor@nexius.hu",
        "course": {
            "id": "c84dcda2-779c-44de-9b74-19773dafabca",
            "title": "Refaktor_Aj·nlott (Copy)",
            "description": "dfysdgsycv",
            "imageUrl": "https://www.straighterline.com/wp/wp-content/uploads/2015/07/blog_feature_IT_Careers_072015.jpg",
            "label": "asdads",
            "registration": {
                "id": "c84dcda2-779c-44de-9b74-19773dafabca",
                "startDate": "2017-10-30T10:20:00Z",
                "endDate": "2018-03-21T10:30:00Z",
                "code": "",
                "invitation": true,
                "enroll": true
            },
            "courseObjects": [],
            "createdAt": "2017-10-30T10:28:36Z",
            "provider": {
                "name": "A Harmadik …vezred Oktat·s·Èrt AlapÌtv·ny",
                "id": "e932b3a0-7c59-4bdd-8dc7-3d9c4588ec55"
            },
            "forCredit": true,
            "qualificationNotice": "",
            "accreditationNum": ""
        },
        "creationDate": "2017-12-11T07:59:50Z",
        "invitation": {
            "organization": {
                "name": "12 …vfolyamos KiegÈszÌtı Gˆrˆg NyelvoktatÛ Iskola",
                "id": "05554cee-05f9-45f7-9f5b-d728f0a39962"
            }, "severity": 3, "expiration": "9999-12-31T23:59:59Z"
        },
        "status": 1
    }, {
        "courseObject": {
            "id": "3e131007-d100-474f-91bc-cdec17d6df10",
            "title": "Root course object",
            "description": "",
            "createdAt": "2017-10-30T10:19:15Z",
            "requirement": {
                "id": "3e131007-d100-474f-91bc-cdec17d6df10",
                "resultStartDate": "2017-10-30T10:19:00Z",
                "resultEndDate": "2018-03-28T09:19:00Z",
                "requiredForCompleted": true,
                "requiredForSatisfied": true,
                "rollupMethod": 2,
                "progressWeight": 1.0,
                "measureWeight": 1.0,
                "suggestedTime": 15,
                "minimumTime": 10,
                "netTimeLimit": 20,
                "grossTimeLimit": 25,
                "grossLimitBase": 1
            },
            "prerequisite": [],
            "label": ""
        },
        "links": [{
            "rel": "Accept",
            "href": "https://devhome.nexiuslearning.com/invitation/qIQ3dY77FE-AgAENCWN4aA/accept",
            "target": "_self",
            "label": "Csatlakoz·s",
            "tooltip": ""
        }, {
            "rel": "Reject",
            "href": "https://devhome.nexiuslearning.com/invitation/qIQ3dY77FE-AgAENCWN4aA/decline",
            "target": "_self",
            "label": "ElutasÌt·s",
            "tooltip": ""
        }],
        "id": "753784a8-fb8e-4f14-8080-010d09637868",
        "user": { "id": "7e2bf990-8496-4523-9138-8573b4c52579" },
        "email": "martus.gabor@nexius.hu",
        "course": {
            "id": "bf402d92-85a7-4f6e-a028-e312122c1315",
            "title": "Refaktor_Aj·nlott",
            "description": "dfysdgsycv",
            "imageUrl": "https://www.straighterline.com/wp/wp-content/uploads/2015/07/blog_feature_IT_Careers_072015.jpg",
            "label": "asdads",
            "registration": {
                "id": "bf402d92-85a7-4f6e-a028-e312122c1315",
                "startDate": "2017-10-30T10:20:00Z",
                "endDate": "2018-03-28T09:20:00Z",
                "code": "",
                "invitation": true,
                "enroll": true
            },
            "courseObjects": [],
            "createdAt": "2017-10-30T10:19:15Z",
            "provider": {
                "name": "A Harmadik …vezred Oktat·s·Èrt AlapÌtv·ny",
                "id": "e932b3a0-7c59-4bdd-8dc7-3d9c4588ec55"
            },
            "forCredit": true,
            "qualificationNotice": "",
            "accreditationNum": ""
        },
        "creationDate": "2017-12-01T15:08:08Z",
        "invitation": { "severity": 3, "expiration": "2018-03-28T09:20:00Z" },
        "status": 1
    }, {
        "courseObject": {
            "id": "3e131007-d100-474f-91bc-cdec17d6df10",
            "title": "Root course object",
            "description": "",
            "createdAt": "2017-10-30T10:19:15Z",
            "requirement": {
                "id": "3e131007-d100-474f-91bc-cdec17d6df10",
                "resultStartDate": "2017-10-30T10:19:00Z",
                "resultEndDate": "2018-03-28T09:19:00Z",
                "requiredForCompleted": true,
                "requiredForSatisfied": true,
                "rollupMethod": 2,
                "progressWeight": 1.0,
                "measureWeight": 1.0,
                "suggestedTime": 15,
                "minimumTime": 10,
                "netTimeLimit": 20,
                "grossTimeLimit": 25,
                "grossLimitBase": 1
            },
            "prerequisite": [],
            "label": ""
        },
        "links": [{
            "rel": "Accept",
            "href": "https://devhome.nexiuslearning.com/invitation/uhJ1s7moCU2jYV7oSqaXCQ/accept",
            "target": "_self",
            "label": "Csatlakoz·s",
            "tooltip": ""
        }, {
            "rel": "Reject",
            "href": "https://devhome.nexiuslearning.com/invitation/uhJ1s7moCU2jYV7oSqaXCQ/decline",
            "target": "_self",
            "label": "ElutasÌt·s",
            "tooltip": ""
        }],
        "id": "b37512ba-a8b9-4d09-a361-5ee84aa69709",
        "user": { "id": "7e2bf990-8496-4523-9138-8573b4c52579" },
        "email": "martus.gabor@nexius.hu",
        "course": {
            "id": "bf402d92-85a7-4f6e-a028-e312122c1315",
            "title": "Refaktor_Aj·nlott",
            "description": "dfysdgsycv",
            "imageUrl": "https://www.straighterline.com/wp/wp-content/uploads/2015/07/blog_feature_IT_Careers_072015.jpg",
            "label": "asdads",
            "registration": {
                "id": "bf402d92-85a7-4f6e-a028-e312122c1315",
                "startDate": "2017-10-30T10:20:00Z",
                "endDate": "2018-03-28T09:20:00Z",
                "code": "",
                "invitation": true,
                "enroll": true
            },
            "courseObjects": [],
            "createdAt": "2017-10-30T10:19:15Z",
            "provider": {
                "name": "A Harmadik …vezred Oktat·s·Èrt AlapÌtv·ny",
                "id": "e932b3a0-7c59-4bdd-8dc7-3d9c4588ec55"
            },
            "forCredit": true,
            "qualificationNotice": "",
            "accreditationNum": ""
        },
        "creationDate": "2017-12-01T15:08:08Z",
        "invitation": {
            "organization": {
                "name": "\"JÛ az ⁄r\" Bodrogi Baptista Gy¸lekezet",
                "id": "c5f35cad-1bea-4310-9882-9b202790915d"
            }, "severity": 3, "expiration": "2018-03-28T09:20:00Z"
        },
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
