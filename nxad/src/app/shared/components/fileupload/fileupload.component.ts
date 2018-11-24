import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BaseSmartComponent } from '../base-smart-component.class';
import { Observable } from 'rxjs';
import * as fromRoot from '../../../reducers/index.reducer';
import * as fromInviteEmailAction from '../../../views/courses/course-detail/invite-email/invite-email.actions';
declare const $: any;
@Component({
    selector: 'nx-fileupload',
    templateUrl: './fileupload.component.html',
    styleUrls: ['./fileupload.component.scss']
})

export class FileuploadComponent extends BaseSmartComponent implements OnInit {
    public isActive: any;
    public fileName: string;
    public fileType: boolean;
    public fileSize: boolean;
    public isValide: boolean;
    public file: File;
    isActive$: Observable<any>;
    fileData$: Observable<any>;

    constructor(private store: Store<fromRoot.AppState>) {
        super();
        this.subscriptions = {
            isActive: null,
            fileData: null
        };
    }

    ngOnInit() {
        this.isActive$ = this.store.select(fromRoot.getInviteIsActive);
        this.fileData$ = this.store.select(fromRoot.);
        this.subscriptions.isActive = this.isActive$.subscribe(
            (isActive) => {
                this.isActive = isActive;
            }
        );
        this.subscriptions.fileData = this.fileData$.subscribe(
            (file) => {
                if (file === undefined) {
                    this.file = null;
                    this.isValide = false;
                    this.fileName = '';
                    // TODO: FomrControllerrel vezérelni a textArea valuet
                    $('#file').val('');
                }
            }
        );
    }

    toggleActive() {
        this.store.dispatch(new fromInviteEmailAction.ToggleInviteActive(true));
    }

    changeFile(files: FileList) {
        this.file = files.item(0);
        this.fileSize = this.file.size / 1000 < 1000;
        this.fileType = (/\.(csv)$/i).test(this.file.name);
        if (!this.fileSize || !this.fileType) {
            this.isValide = true;
            this.fileName = '';
            this.store.dispatch(new fromInviteEmailAction.SetFileData(null));
            return;
        }
        this.fileName = this.file.name;
        this.isValide = false;
        this.store.dispatch(new fromInviteEmailAction.SetFileData(this.file));
    }
}

