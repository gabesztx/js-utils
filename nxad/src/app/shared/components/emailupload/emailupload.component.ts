import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../../reducers/index.reducer';
import * as fromInviteEmailAction from '../../../views/courses/course-detail/invite-email/invite-email.actions';
import { BaseSmartComponent } from '../base-smart-component.class';

declare const $: any;

@Component({
    selector: 'nx-emailupload',
    templateUrl: './emailupload.component.html',
    styleUrls: ['./emailupload.component.scss']
})
export class EmailuploadComponent extends BaseSmartComponent implements OnInit {
    public isActive: any;
    public isValide: boolean;
    public maxCahracter = 2000;
    public emailData = '';
    public textValue = '';
    public counterNum: number;
    isActive$: Observable<any>;
    emailData$: Observable<any>;

    constructor(private store: Store<fromRoot.AppState>) {
        super();
        this.subscriptions = {
            isActive: null,
            emailData: null
        };
    }

    ngOnInit() {
        this.isActive$ = this.store.select(fromRoot.getInviteIsActive);
        this.subscriptions.isActive = this.isActive$.subscribe(
            (isActive) => {
                // console.log('email isActive');
                this.isActive = isActive;
            }
        );
        this.emailData$ = this.store.select(fromRoot.getInviteEmail);

        this.subscriptions.emailData = this.emailData$.subscribe(
            (emailData) => {
                if (emailData.length === 0) {
                    $('.emailInputArea').val('');
                }
                this.emailData = emailData;
                this.counterNum = this.maxCahracter - emailData.length;
                this.isValide = emailData.length > this.maxCahracter;
            }
        );
    }

    toggleActive() {
        // console.log('toggleActive email');
        this.store.dispatch(new fromInviteEmailAction.ToggleInviteActive(false));
    }

    changeTextInput(emails: any) {
        // console.log('changeTextInput');
        this.store.dispatch(new fromInviteEmailAction.SetEmailData(emails.value));
    }
}
