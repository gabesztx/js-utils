// External imports
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Actions } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
// Nexius core imports
import { EntityService, SessionService } from '@nexius/core';
// Internal imports
import { InvitationModel } from '../../../models/invitation.model';
import * as fromRoot from '../../../reducers/index.reducer';
import * as invitationsActions from './invitation-template.actions';
import { CourseModel } from '../../../models/course.model';
import { EntityTypes} from '../../entities/entity-types.enum';

@Injectable()

export class InvitationTemplateService extends EntityService {

    constructor(
        protected http: HttpClient,
        protected store: Store<fromRoot.AppState>,
        private action$: Actions,
        private sessionService: SessionService,
    ) {
        super(EntityTypes.COURSE_INVITATION, new CourseModel(), http, store, action$, sessionService);
    }

    /*list(courseId: any): Observable<any> {
        const url = this.apiUrl + courseId + '/invitations';
        return this.get<Course[]>(url).pipe(
            tap((c) => {
                if (CourseModel.are(c, CourseSchema)) {
                    this.store.dispatch(new invitationsActions.ListInvitesAction(c));
                }
            })
        );
    }*/

}
