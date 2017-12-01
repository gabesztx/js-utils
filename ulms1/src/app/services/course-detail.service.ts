import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { HttpProxy } from './base/http-proxy.class';
import { RuntimeConfigService } from './runtime-config.service';


@Injectable()
export class CourseDetailService extends HttpProxy {
    public courseDetailData = { courseDetail: null, courseFeeds: null };
    public courseDetailId: any;

    constructor(protected http: Http, private config: RuntimeConfigService, private route: ActivatedRoute, private router: Router) {
        super();
    }

    getCourseDetailData(): Observable<any> {
        const apiUrl = `${this.config.baseApiUrl}usercourses/${this.courseDetailId}`;
        return this.get(apiUrl).map(value => value);
    }

    getCourseFeedsData(): Observable<any> {
        const apiUrl = `${this.config.baseApiUrl}feeds/${this.courseDetailId}`;
        return this.get(apiUrl).map(value => value.items);
    }

    postCourseEnrollment(id: string) { // set Observable
        console.log('postCourseEnrollment', id);
    }


    courseDetailRouting(id?: string) {
        this.router.navigate(['courses', id]);

        /*  const getDetailUrlParamValue = (courseState: any) => {
              if (courseState === 4 || courseState === 5) {
                  return 'content';

              } else if (courseState >= 0 && courseState <= 2 || courseState == null) {
                  return 'info';

              } else if (courseState === 3) {
                  return 'info';

              }
          };*/


        /*this.getListData(id).subscribe(
            res => {
                const courseState = res.courseDetail.courseState;
                const urlParam = getDetailUrlParamValue(courseState);
                this.router.navigate(['courses', id, urlParam]);
            },
            error => {
                if (error && error.status === 302) {
                    const urlPath = JSON.parse(error.message);
                    window.location.href = urlPath;
                }
            }
        );*/
    }

    list(): Observable<any> {
        // console.log('CourseDetailService - list');
        return Observable.of(
            this.getCourseDetailData(),
            this.getCourseFeedsData()
        ).combineAll().map((results: Array<any>) => {
            this.courseDetailData.courseDetail = results[0];
            this.courseDetailData.courseFeeds = results[1];
            return this.courseDetailData;
        });
    }

    getListData(id?: string): Observable<any> {
        // console.log('CourseDetailService - getListData');
        // console.log('NEW ID', id);
        // console.log('OLD ID', this.courseDetailId);
        if (!this.courseDetailId || (id && this.courseDetailId !== id)) {
            console.log('Új kérés');
            this.courseDetailId = id;
            return this.list();
        } else {
            console.log('Már van - nincs kérés ------->');
            return Observable.of(this.courseDetailData);
        }
    }

}
