import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { EmailuploadService } from '../../../../shared/services/emailupload.service';
import { FileuploadService } from '../../../../shared/services/fileupload.service';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Observable, Subscription } from 'rxjs';
import * as fromRoot from '../../../../reducers/index.reducer';
import * as fromCourseModel from '../../../../models/course.model';
import * as fromInviteEmailAction from './invite-email.actions';

// import { NxGridOptions } from '../../../../shared/grid/grid-model.class';
// import { GridController } from '../../../../shared/grid/grid-controller.class';

import { L10nService, GridController, NxGridOptions, CommonRuntimeConfig, ListFilterConfig } from '@nexius/core';
import { InvitationTemplateService } from '../../../../shared/entities/invitation-template/invitation-template.service';
import { ActivatedRoute } from '@angular/router';
import { dateRenderer, isCloseCourse } from '../../../../shared/utils';

declare let window: any;

@Component({
    selector: 'nx-invite-email',
    templateUrl: './invite-email.component.html',
    styleUrls: ['./invite-email.component.scss']
})

export class InviteEmailComponent extends GridController implements OnInit, OnDestroy {

    protected subscriptions: { [s: string]: Subscription };
    public inviteState: any;
    public isActive: any;
    public isFileActive: any;
    public isEmailActive: any;
    public courseId: any;
    public invitationId: any;
    public isClosed: boolean;
    public sendingProcess = false;
    public emailPreview = '-';
    public modalText = '';

    private gridOptions: NxGridOptions = {
        pagination: false,
        paginationAutoPageSize: false,
        defaultColDef: {
            suppressFilter: true,
            suppressMenu: true
        },
        columnDefs: [{
            headerName: 'enm_license_holder_organization',
            field: 'organization.name',
        }, {
            headerName: 'lbl_invitation',
            field: 'title',
        }, {
            headerName: 'lbl_expiration',
            field: 'expiration',
            cellRenderer: (params) => dateRenderer(params.value),
            colId: 'expiration'
        }, {
            headerName: 'lbl_creator',
            field: 'creator.name',
        }, {
            headerName: 'lbl_invitataion_send',
            cellRenderer: (params) => {
                return params.value ? params.value : '0';
            },
            field: 'sentUserInvitationsCounter',
        }, {
            headerName: 'lbl_license_holder_name',
            cellRenderer: (params) => params.value ? params.value : '',
            field: 'licenseHolder.name',
        }, {
            headerName: 'lbl_available_student_places',
            cellRenderer: (params) => {
                // console.log('PARAMS', params);
                if (params.data && params.data.licenseHolder) {
                    return params.value ? params.value : this.l10n.translate('lbl_unlimited');
                } else {
                    return this.l10n.translate('lbl_unlimited');
                }
            },
            field: 'licenceUserLimit',
        }, {
            headerName: 'lbl_used',
            cellRenderer: (params) => {
                if (params.data && params.data.licenseHolder) {
                    return params.value ? params.value : '0';
                }
            },
            field: 'licenseRegistrationCounter',
        }],
        rowSelection: 'single',
        suppressRowClickSelection: false,
        enableColResize: true,
        onRowClicked: this.rowClicked.bind(this),
        // diselectAll: this.deselectAll.bind(this),
    };

    modalRef: BsModalRef;
    inviteState$: Observable<any>;
    // invitationList$: Observable<fromCourseModel.Course[]>;
    getInviteInvitation$: Observable<any>;
    @ViewChild('template') modalTemplate: any;

    constructor(private l10n: L10nService,
                protected store: Store<fromRoot.AppState>,
                private route: ActivatedRoute,
                private modalService: BsModalService,
                private config: CommonRuntimeConfig,
                private invitationsService: InvitationTemplateService,
                private fileuploadService: FileuploadService,
                private emailuploadService: EmailuploadService) {
        super(store, window, l10n);

        this.subscriptions = {
            invitationsList: null,
            inviteState: null,
            emailsUpload: null,
            fileUpload: null,
            inviteInvitation: null,
            course: null,
        };

        this.courseId = this.route.snapshot.parent.params['id'];
        this.gridOptions.apiUrl = `${this.config.baseApiUrl}lmsadmin/courses/` + this.courseId + '/invitations';
        this.gridOptions.entityService = this.invitationsService;
        this.data.setGridOptions(this.gridOptions);
    }

    ngOnInit() {
        this.inviteState$ = this.store.select(fromRoot.getInviteState);
        this.subscriptions.inviteState = this.inviteState$
            .subscribe(
                (inviteState) => {
                    // console.log('invite State');
                    this.inviteState = inviteState;
                    this.isActive = inviteState.isActive;
                    if (this.inviteState.isActive !== null && !!this.inviteState.invitationData) {
                        this.isFileActive = this.isActive && !!this.inviteState.fileData;
                        this.isEmailActive = !this.isActive && !!(this.inviteState.emailData.length <= 2000 && this.inviteState.emailData.length);
                    }
                }
            );
        this.getInviteInvitation$ = this.store.select(fromRoot.getInviteInvitationState);
        this.subscriptions.inviteInvitation = this.getInviteInvitation$
            .subscribe(
                (invitation) => {
                    console.log('invitation');
                    if (invitation) {
                        this.invitationId = invitation.id;
                        this.emailPreview = invitation.description.length ? invitation.description : '-';
                    } else {
                        this.isFileActive = null;
                        this.isEmailActive = null;
                        this.emailPreview = this.l10n.translate('msg_no_selected_invitation_template');
                    }
                }
            );

        // this.course$ = this.store.select(fromRoot.getSelectedCourse);
        /*this.subscriptions.course = this.course$.subscribe((res) => {
            const resultEndDate = res.resultEndDate;
            this.isClosed = isCloseCourse(resultEndDate);
        });*/
    }

    rowClicked(invitation: any) {
        this.store.dispatch(new fromInviteEmailAction.SetInvitationData(invitation.data));
    }

    submitUpload() {
        this.sendingProcess = true;
        setTimeout(() => {
            if (this.inviteState.isActive) {
                this.subscriptions.fileUpload = this.fileuploadService
                    .upload(this.inviteState, this.invitationId)
                    .subscribe(
                        (res) => {
                            if (res.ok) {
                                this.sendingProcess = false;
                                this.reseInvitetData();
                                this.modalText = this.l10n.translate('msg_success_fileupload');
                                this.openModal(this.modalTemplate);
                            }
                        },
                        (error) => {
                            this.sendingProcess = false;
                            this.reseInvitetData();
                            alert('File Upload Error');
                        });
            } else {
                this.subscriptions.emailsUpload = this.emailuploadService
                    .upload(this.inviteState, this.courseId, this.invitationId)
                    .subscribe(
                        (res) => {
                            if (res.ok) {
                                this.sendingProcess = false;
                                this.reseInvitetData();
                                this.modalText = this.l10n.translate('msg_success_emailupload');
                                this.openModal(this.modalTemplate);
                            }
                        },
                        (error) => {
                            this.sendingProcess = false;
                            this.reseInvitetData();
                            alert('Emails Upload Error');
                        });
            }
        }, 25);
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    reseInvitetData() {
        this.data.gridOptions.api.deselectAll();
        this.store.dispatch(new fromInviteEmailAction.ToggleInviteActive(null));
        this.store.dispatch(new fromInviteEmailAction.SetInvitationData(null));
        this.store.dispatch(new fromInviteEmailAction.SetFileData(undefined));
        this.store.dispatch(new fromInviteEmailAction.SetEmailData(''));
    }

    ngOnDestroy() {
        this.removeSize();
        for (const sub in this.subscriptions) {
            if (this.subscriptions[sub] instanceof Subscription) {
                this.subscriptions[sub].unsubscribe();
            }
        }
        this.store.dispatch(new fromInviteEmailAction.ToggleInviteActive(null));
        this.store.dispatch(new fromInviteEmailAction.SetInvitationData(null));
        this.store.dispatch(new fromInviteEmailAction.SetFileData(undefined));
        this.store.dispatch(new fromInviteEmailAction.SetEmailData(''));
    }
}
