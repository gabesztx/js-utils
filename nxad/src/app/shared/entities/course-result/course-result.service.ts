// External imports
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Actions } from '@ngrx/effects';
// Nexius core imports
import { EntityService, SessionService } from '@nexius/core';
// Internal imports
import * as fromRoot from '../../../reducers/index.reducer';
import { CourseResultModel } from './course-result.model';
import { EntityTypes } from '../entity-types.enum';
@Injectable()

export class CourseResultService extends EntityService {

    constructor(
        protected http: HttpClient,
        protected store: Store<fromRoot.AppState>,
        private action$: Actions,
        private sessionService: SessionService,
    ) {
        super( EntityTypes.COURSE_RESULT, new CourseResultModel(), http, store, action$, sessionService);
    }

}
