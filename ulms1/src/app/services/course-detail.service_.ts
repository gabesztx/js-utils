import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { RestApiResponse } from './base/http.class';

import { feedData } from './course-detail-feed-data';
import { data1 } from './course-detail-data-1';
import { data2 } from './course-detail-data-2'; // tanusítvány megszerzése
import { data3 } from './course-detail-data-3';
import { data4 } from './course-detail-data-4';
import { data5 } from './course-detail-data-5'; // aktualis
import { data6 } from './course-detail-data-6'; // ajánlott
import { data7 } from './course-detail-data-7'; // választható
import { data8 } from './course-detail-data-8'; // hamarosan
import { data9 } from './course-detail-data-9'; // lezárt
import { data10 } from './course-detail-data-10'; // szerződése letöltése
import { data11 } from './course-detail-data-11'; // external nav link
import { data12 } from './course-detail-data-12'; // documentum letöltése
import { data13 } from './course-detail-data-13'; // oklevél letöltése
import { data14 } from './course-detail-data-14'; // tananyag indítás / nyugalom megzavarása popup
import { data15 } from './course-detail-data-15'; // tananyag indítás / nyugalom megzavarása popup

@Injectable()
export class CourseDetailService_ {

    public courseList = <Array<any>>JSON.parse(JSON.stringify(data15));
    public courseFeed = <Array<any>>JSON.parse(JSON.stringify(feedData));
    public courseDetailData = { courseDetail: null, courseFeeds: null };
    public courseDetaiId: any;

    public list(id?: any): Observable<any> {
        this.courseDetaiId = id;
        this.courseDetailData.courseDetail = this.courseList;
        this.courseDetailData.courseFeeds = this.courseFeed;
        return Observable.of(this.courseDetailData);
    }

    public getListData(): Observable<any> {
        return Observable.of(this.courseDetailData);
    }
}


