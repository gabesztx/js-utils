import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers/index.reducer';
import * as systemAction from '../../actions/system.actions';
import {L10nService, UserService} from '@nexius/core';
import {of as observableOf} from 'rxjs';
import {combineAll, map, tap} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class PreloadService {

    constructor(
        private store: Store<fromRoot.AppState>,
        private l10n: L10nService,
        private user: UserService) {
    }

    loadResources(): void {
        observableOf(
            this.l10n.init('Content/lmsadmin/assets/'),
            this.user.isReady()
        ).pipe(
            combineAll(),
            map((results: Array<boolean>) => {
                return results.filter(result => result === false).length === 0;
            }),
            tap((ready: boolean) => {
                this.store.dispatch(new systemAction.SetSystemReadyStateAction(ready));
            })
        ).subscribe();
    }
}
