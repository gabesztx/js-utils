// External imports
import { Subscription, Observable, of } from 'rxjs';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { L10nService, GridController, NxGridOptions, CommonRuntimeConfig, ListFilterConfig } from '@nexius/core';
import * as fromRoot from '../../../../reducers/index.reducer';
// import { CourseSelect } from '../../../../shared/entities/course/course.actions';

import { UserInvitation } from '../../../../models/user-invitation.model';
import { UserInvitationStatus } from '../../../../models/enums/user-ivitation-status.enum';
import { UserInvitationService } from '../../../../shared/entities/user-invitation/user-invitation.service';
import { CourseService } from '../../../../shared/entities/course/course.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { UserLevel } from '../../../../models/user.model';
import { dateRenderer, fullDateRenderer } from '../../../../shared/utils';

declare let window: any;

@Component({
  selector: 'nx-user-invitations',
  templateUrl: './user-invitations.component.html',
  styleUrls: ['./user-invitations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInvitationsComponent extends GridController implements OnInit, OnDestroy {
    hasPermission: boolean;
    public courseId: any;
    public userInvitations$: Observable<Array<UserInvitation>>;

    /**
     * @property subscriptions
     * @description
     * A map of subscriptions used by the Component. OnDestroys unsubscribes all enlisted subscriptions.
     * @private
     * @memberof SidebarNavComponent
     */
    protected subscriptions: { [s: string]: Subscription };

    /** config filters */
    public filterConfig: ListFilterConfig = {
        fields: [{
            name: 'email',
            label: 'lbl_email'
        }, {
            name: 'username',
            label: 'lbl_name'
        }],
        fireOnInputChange: true, // can we do it without pressEnterLabelKey?
        showResetButton: false,
        showSearchButton: true,
        filterButtonLabel: '.',
        filterFieldSelectPlaceholder: this.l10n.translate('lbl_filter_field'),
        filterTextFieldPlaceholder: this.l10n.translate('lbl_filter_text'),
        resetButtonLabel: this.l10n.translate('btn_reset_grid'),
        pressEnterLabelKey: this.l10n.translate('lbl_press_enter')
    };

    /**
     * @property gridOptions
     * @type NxGridOptions
     * @description
     * Define options for the Content List ag-Grid instance here.
     */
    private gridOptions: NxGridOptions = {
        defaultColDef: {
            suppressFilter: true,
            suppressMenu: true
        },
        columnDefs: [{
            headerName: 'lbl_invitation_title',
            field: 'invitationTitle'
        }, {
            headerName: 'lbl_user_name',
            field: 'userName'
        }, {
            headerName: 'lbl_email',
            field: 'email'
        }, {
            headerName: 'lbl_status',
            field: 'status',
            cellRenderer: (params) => {
                if (params.data) {
                    const enum_key = params.data.status;
                    const language_key = 'enm_user_invitation_status_' + enum_key + '_' + UserInvitationStatus[enum_key].toLowerCase();
                    return this.l10n.translate(language_key);
                }
            }
        }, {
            headerName: 'lbl_status_change_date',
            field: 'statusChangedDate',
            cellRenderer: (params) => dateRenderer(params.value),
            colId: 'statuschangeddate'
        }],
        enableColResize: true,
    };

    constructor(
        private route: ActivatedRoute,
        protected store: Store<fromRoot.AppState>,
        private l10n: L10nService,
        private config: CommonRuntimeConfig,
        private userInvitationService: UserInvitationService,
        private courseService: CourseService,
        private auth: AuthService
    ) {
        super(store, window, l10n);

        this.subscriptions = {
            userInvitationListSelector: null,
            userInvitationListService: null,
            selectedCourse: null
        };

        this.courseId = this.route.snapshot.parent.params['id'];
        this.gridOptions.apiUrl = `${this.config.baseApiUrl}lmsadmin/courses/` + this.courseId + '/userinvitations';
        this.gridOptions.entityService = this.userInvitationService;
        this.data.setGridOptions(this.gridOptions);
    }

    ngOnInit() {
        // this.userInvitations$ = this.store.select(fromRoot.getUserInvitations);
        // this.subscriptions.userInvitationListService = this.userInvitationService.list(this.search).subscribe();
        // Check permission
        this.hasPermission = this.auth.isOrganizationAdmin()
            || (this.auth.isInRole(UserLevel.SysSupport, false)
            || this.auth.isInRole(UserLevel.SysAdmin, false));
    }

    /*onReady(): void {
      /!*  super.onReady();
        this.subscriptions.userInvitationListSelector = this.userInvitations$.subscribe((userInvitations) => {
            this.vm.gridOptions.api.setRowData(userInvitations);
            this.addResize();
        });*!/
    }*/

    /*ngOnDestroy() {
        /!*for (const sub in this.subscriptions) {
            if (this.subscriptions[sub] instanceof Subscription) {
                this.subscriptions[sub].unsubscribe();
            }
        }*!/
        // this.removeSize();
    }*/

}
