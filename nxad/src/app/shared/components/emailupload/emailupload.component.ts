import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../../reducers/index.reducer';
import * as fromInviteEmailAction from '../invite-email/invite-email.actions';
import { BaseSmartComponent } from '../base-smart-component.class';

@Component({
    selector: 'nx-emailupload',
    templateUrl: './emailupload.component.html',
    styleUrls: ['./emailupload.component.scss']
})
export class EmailuploadComponent extends BaseSmartComponent implements OnInit {
    public isActive: any;
    public isValide: boolean;
    public emailData = '';
    isActive$: Observable<any>;

    constructor(private store: Store<fromRoot.AppState>) {
        super();
        this.subscriptions = {'isActive': null};
    }

    ngOnInit() {
        this.isActive$ = this.store.select(fromRoot.getInviteIsActive);
        this.subscriptions.isActive = this.isActive$.subscribe(
            (isActive) => {
                this.isActive = isActive;
            }
        );
    }

    toggleActive() {
        this.store.dispatch(new fromInviteEmailAction.ToggleInviteActive(false));
    }

    changeTextInput(emails: any) {
        this.emailData = emails.value;
        this.isValide = this.emailData.length >= 2000;
        this.store.dispatch(new fromInviteEmailAction.SetEmailData(this.emailData));
    }
}
