import { Injectable } from '@angular/core';
import { RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { RestApiResponse } from './base/http.class';
import { HttpProxy } from './base/http-proxy.class';
import { SearchModel } from '../models/search.model';
import { RuntimeConfigService } from './runtime-config.service';

let __instance__: CourseService = null;

@Injectable()
export class CourseService extends HttpProxy {
    private apiUrl: string;

    constructor(protected http: Http, private config: RuntimeConfigService) {
        super();

        if (__instance__ !== this) {

            this.apiUrl = `${this.config.baseApiUrl}usercourselist`;
            __instance__ = this;
        }

        return __instance__;
    }

    list(search: SearchModel, params?: any): Observable<RestApiResponse<any>> {
        let opts: RequestOptions = null;
        if (search) {
            opts = new RequestOptions({
                search: search.getURLSearchParameters()
            });
        }
        return this.get(`${this.apiUrl}`, opts)
            .map((result: any) => {
                return {
                    hasNextPage: result.hasNextPage,
                    items: result.items,
                    currentPage: result.currentPage,
                    pageSize: result.pageSize,
                    total: result.total,
                    totalPages: result.totalPages
                };
            });
    }
}


/* public getList(pageNum ?: number): Observable<RestApiResponse<Array<CourseDetail>>> {
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
 }*/
