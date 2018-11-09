// External imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
// Nexius Core imports
import {  CommonRuntimeConfig, EntityService, SessionService } from '@nexius/core';
// Internal imports
import * as fromRoot from '../../../reducers/index.reducer';
import { EntityTypes } from '../../entities/entity-types.enum';
import { UserInvitation, UserInvitationModel, UserInvitationSchema } from '../../../models/user-invitation.model';
import { Actions } from '@ngrx/effects';

@Injectable()
export class UserInvitationService extends EntityService {
    constructor(
        protected http: HttpClient,
        protected store: Store<fromRoot.AppState>,
        private action$: Actions,
        private sessionService: SessionService) {
        super(EntityTypes.USER_INVITATION, new UserInvitationModel(), http, store, action$, sessionService);
    }
    /*list<T>(baseApiUrl: string, search?: SearchModel): Observable<T[]> {
        return this.store.select(
            fromRoot.CoreSelectors.getSelectedEntityOfType<Course>('course')
        ).pipe(
            filter((course) => {
                return !!course;
            }),
            switchMap((course) => {
                const apiUrl = `${baseApiUrl}/${course.id}/userinvitations`;
                return super.list<T>(apiUrl, search);
            }),
        );

    }
*/
    /* list(search?: SearchModel): Observable<UserInvitation[]> {
         let opts: any = null;

         if (search) {
             opts = {
                 params: search.getURLSearchParameters()
             };
         }

         return this.store.select(fromRoot.getSelectedCourse).pipe(
             filter((course) => {
                 return !!course;
             }),
             switchMap((course) => {
                 this.apiUrl = `${this.config.baseApiUrl}lmsadmin/courses/${course.id}/userinvitations`;
                 return this.get<UserInvitation[]>(`${this.apiUrl}`, opts);
             }),
             tap((i) => {
                 if (UserInvitationModel.are(i, UserInvitationSchema)) {
                     this.store.dispatch(new userInvitationActions.ListUserInvitationsAction(i));
                 }
             })
         );
     }*/

}
