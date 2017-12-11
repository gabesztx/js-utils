import {Injectable} from '@angular/core';
import {RequestOptions, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import {RestApiResponse} from './base/http.class';
import {HttpProxy} from './base/http-proxy.class';
import {SearchModel} from '../models/search.model';
import {RuntimeConfigService} from './runtime-config.service';
import {CourseListApiLoaderService} from './course-list-api-loader.service';

let __instance__: OptionalService = null;

@Injectable()
export class OptionalService extends HttpProxy {
    private apiUrl: string;
    public courseListDataProvoider: any;
    public apiIndex = 'useroptionalcourselist';

    constructor(protected http: Http, private config: RuntimeConfigService, private courseListApiLoaderService: CourseListApiLoaderService) {
        super();
        this.courseListDataProvoider = this.courseListApiLoaderService.courseListDataProvoider;
        if (__instance__ !== this) {

            this.apiUrl = `${this.config.baseApiUrl}${this.apiIndex}`;
            __instance__ = this;
        }
        return __instance__;
    }

    list(courseState: any, search: SearchModel, params?: any): Observable<RestApiResponse<any>> {
        let opts: RequestOptions = null;
        if (search) {
            opts = new RequestOptions({
                search: search.getURLSearchParameters()
            });
        }
        return this.get(`${this.apiUrl}`, opts)
            .map((result: any) => {
                const data = {
                    hasNextPage: result.hasNextPage,
                    items: result.items,
                    currentPage: result.currentPage,
                    pageSize: result.pageSize,
                    total: result.total,
                    totalPages: result.totalPages
                };
                // console.log('RESOLVE OK', courseState);
                this.courseListDataProvoider[courseState] = data;
                return data;
            });
    }

    getListData(courseState: any, search: SearchModel, params?: any): Observable<any> {
        // console.log('courseListDataProvoider----', this.courseListDataProvoider[courseState]);
        // console.log('FILTER', courseState);
        if (this.courseListDataProvoider[courseState]) {
            console.log('--- MÁR VAN MEHET TOVÁBB ---');
            return Observable.of(this.courseListDataProvoider[courseState]);
        } else {
            console.log('--- LEKÉR ---');
            return this.list(courseState, search, params);
        }
    }
}
