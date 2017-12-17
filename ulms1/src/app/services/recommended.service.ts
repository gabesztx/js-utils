import { Injectable } from '@angular/core';
import { RequestOptions, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { RestApiResponse } from './base/http.class';
import { HttpProxy } from './base/http-proxy.class';
import { SearchModel } from '../models/search.model';
import { RuntimeConfigService } from './runtime-config.service';
import { CourseListApiLoaderService } from './course-list-api-loader.service';

import { PreferencesApiKey } from '../models/user.model';
import { PreferencesService } from './preferences.service';

let __instance__: RecommendedService = null;

@Injectable()
export class RecommendedService extends HttpProxy {
    private apiUrl: string;
    public courseListDataProvoider: any;
    public apiKey = 'userinvitations';

    constructor(protected http: Http,
                private config: RuntimeConfigService,
                private preferences: PreferencesService,
                private courseListApiLoaderService: CourseListApiLoaderService) {
        super();
        this.courseListDataProvoider = this.courseListApiLoaderService.courseListDataProvoider;
        if (__instance__ !== this) {

            this.apiUrl = `${this.config.baseApiUrl}${this.apiKey}`;
            __instance__ = this;
        }

        return __instance__;
    }

    list(courseState, search: SearchModel, params?: any): Observable<RestApiResponse<any>> {
        let opts: RequestOptions = null;
        if (search) {
            opts = new RequestOptions({
                search: search.getURLSearchParameters()
            });
        }

        const page = search.page;

        if (this.courseListDataProvoider[courseState].hasOwnProperty(page)) {
            return this.courseListDataProvoider[courseState][page];
        }

        return this.get(`${this.apiUrl}`, opts)
            .map((result: any) => {

                const currentPage = result.currentPage;
                const totalPages = result.totalPages;
                const data = {
                    hasNextPage: result.hasNextPage,
                    items: result.items,
                    //notificationData: result.items,
                    currentPage: currentPage,
                    pageSize: result.pageSize,
                    total: result.total,
                    totalPages: totalPages
                };

                this.preferences.setCurrentPreference(PreferencesApiKey.api_InvitedCourses, result.items);
                this.courseListDataProvoider[courseState][currentPage] = data;
                return data;
            });
    }
}
