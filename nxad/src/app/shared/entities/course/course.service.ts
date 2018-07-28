import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
// Nexius Core imports
import { HttpProxy, CommonRuntimeConfig, SearchModel } from '@nexius/core';
// Internal imports
import * as fromRoot from '../../../reducers/index.reducer';
import * as courseActions from './course.actions';
import { SharedModule } from '../../shared.module';
import { Course, CourseModel, CourseSchema } from '../../../models/course.model';

@Injectable({
    providedIn: SharedModule
})
export class CourseService extends HttpProxy {

    private apiUrl: string;

    constructor(
        protected http: HttpClient,
        protected store: Store<fromRoot.AppState>,
        private config: CommonRuntimeConfig
    ) {
        super();
        this.apiUrl = `${this.config.baseApiUrl}lms/admin/courses`;
    }

    list(search?: SearchModel): Observable<Course[]> {
        let opts: any = null;

        if (search) {
            opts = {
                params: search.getURLSearchParameters()
            };
        }

        return this.get<Course[]>(`${this.apiUrl}`, opts).pipe(
            tap((c) => {
                if (CourseModel.are(c, CourseSchema)) {
                    this.store.dispatch(new courseActions.ListCoursesAction(c));
                }
            })
        );
    }

}
