import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

// Nexius Core imports
import { EntityService, CommonRuntimeConfig, SessionService } from '@nexius/core';
// Internal imports
import * as fromRoot from '../../../reducers/index.reducer';
import * as courseActions from './course.actions';
import { SharedModule } from '../../shared.module';
import { CourseModel } from '../../../models/course.model';
import { CourseSelect } from './course.actions';
import { EntityTypes } from '../../entities/entity-types.enum';

@Injectable({
    providedIn: SharedModule
})
export class CourseService extends EntityService {

    // private apiUrl: string;
    public courseDetailData: any;

    constructor(
        protected http: HttpClient,
        protected store: Store<fromRoot.AppState>,
        private action$: Actions,
        private sessionService: SessionService,
    ) {
        // TODOD: Entity typeot configból használni
        super(EntityTypes.COURSE, new CourseModel(), http, store, action$, sessionService);
    }

}
