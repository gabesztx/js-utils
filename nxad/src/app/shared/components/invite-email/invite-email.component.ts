import { Component, OnInit } from '@angular/core';
import { EmailuploadService } from '../../services/emailupload.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../../../reducers/index.reducer';
import { BaseSmartComponent } from '../base-smart-component.class';

@Component({
    selector: 'nx-invite-email',
    templateUrl: './invite-email.component.html',
    styleUrls: ['./invite-email.component.scss']
})
export class InviteEmailComponent extends BaseSmartComponent implements OnInit {
    inviteState$: Observable<any>;
    public inviteState: any;
    public isActive: any;
    public isFileActive: any;
    public isEmailActive: any;

    constructor(private store: Store<fromRoot.AppState>,
                private emailuploadService: EmailuploadService) {
        super();
        this.subscriptions = {'inviteState': null};
    }

    ngOnInit() {
        this.inviteState$ = this.store.select(fromRoot.getInviteState);
        this.subscriptions.inviteState = this.inviteState$.subscribe(
            (inviteState) => {
                this.inviteState = inviteState;
                this.isActive = inviteState.isActive;
                if (this.inviteState.isActive !== null) {
                    this.isFileActive = this.isActive && !!this.inviteState.fileData;
                    this.isEmailActive = !this.isActive && !!this.inviteState.emailData;
                }
            }
        );
    }

    submitUpload() {
        const postData = this.isActive ? this.inviteState.fileData : this.inviteState.emailData;
        const name = this.isActive ? 'file' : 'email';
        this.emailuploadService.uploadInvite(postData, name).subscribe(
            (res) => {
                if (res.ok) {
                    alert('Upload Success');
                }
            },
            error => console.log('Upload ERROR'));
    }
}
