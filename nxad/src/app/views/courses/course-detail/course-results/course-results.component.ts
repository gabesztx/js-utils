import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { L10nService, GridController, NxGridOptions, CommonRuntimeConfig, ListFilterConfig, FilterModel } from '@nexius/core';
import * as fromRoot from '../../../../reducers/index.reducer';
import { CourseResultService } from '../../../../shared/entities/course-result/course-result.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { UserLevel } from '../../../../models/user.model';
import { CourseResultStatusEnum as courseResultEnum } from '../../../../models/enums/course-result-status.enum';

declare const $: any;
declare let window: any;

@Component({
    selector: 'nx-course-results',
    templateUrl: './course-results.component.html',
    styleUrls: ['./course-results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseResultsComponent extends GridController implements OnInit, OnDestroy {
    hasPermission: boolean;
    courseId: any;
    courseResultDetailPanelValue = 'Nincs kiválasztott tanuló';
    showPreloader: boolean;
    public filterStatusConfig = {
        filterName: 'status',
        placeHolder: this.l10n.translate('lbl_courses_result_status'),
        option: [
            {
                value: courseResultEnum['Unknown'],
                title: this.l10n.translate('lbl_all')
            }, {
                value: courseResultEnum['Disabled'],
                title: this.l10n.translate('enm_course_activity_status_1_disabled')
            }, {
                value: courseResultEnum['NotAttempted'],
                title: this.l10n.translate('enm_course_activity_status_2_not_attempted')
            }, {
                value: courseResultEnum['Attempted'],
                title: this.l10n.translate('enm_course_activity_status_3_attempted')
            }, {
                value: courseResultEnum['Completed'],
                title: this.l10n.translate('enm_course_activity_status_4_completed')
            }, {
                value: courseResultEnum['Satisfied'],
                title: this.l10n.translate('enm_course_activity_status_5_satisfied')
            }, {
                value: courseResultEnum['Qualified'],
                title: this.l10n.translate('enm_course_activity_status_6_qualified')
            }, {
                value: courseResultEnum['Failed'],
                title: this.l10n.translate('enm_course_activity_status_7_failed')
            },
        ]
    };

    filterConfig: ListFilterConfig = {
        fields: [{
            name: 'username',
            label: 'lbl_user_name'
        }, {
            name: 'user.primaryemail',
            label: 'lbl_primary_login'
        }, {
            name: 'registrarorganization.name',
            label: 'lbl_registrar_organization'
        }, {
            name: 'externaluserid',
            label: 'lbl_external_user_id'
        }, {
            name: 'application.name',
            label: 'lbl_registrar_app'
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

    private gridOptions: NxGridOptions = {
        pagination: false,
        paginationAutoPageSize: false,
        defaultColDef: {
            suppressFilter: true,
            suppressMenu: true
        },
        columnDefs: [{
            headerName: 'lbl_user_name',
            field: 'user.name',
        }, {
            headerName: 'lbl_primary_login',
            field: 'user.primaryEmail',
        }, {
            headerName: 'lbl_registrar_organization',
            field: 'registrarOrganization.name',
        }, {
            headerName: 'lbl_external_user_id',
            field: 'externalUserId',
        }, {
            headerName: 'lbl_registrar_app',
            field: 'application.name',
        }],
        rowSelection: 'single',
        suppressRowClickSelection: false,
        enableColResize: true,
        onRowClicked: this.rowClicked.bind(this)
    };
    courseResultDetail$: Observable<any>;

    constructor(private l10n: L10nService,
                protected store: Store<fromRoot.AppState>,
                private auth: AuthService,
                private route: ActivatedRoute,
                private zone: NgZone,
                private modalService: BsModalService,
                private config: CommonRuntimeConfig,
                private courseResultService: CourseResultService // TODO
    ) {
        super(store, window, l10n);
        this.courseId = this.route.snapshot.parent.params['id'];
        this.gridOptions.apiUrl = `${this.config.baseApiUrl}lmsadmin/courses/` + this.courseId + '/courseregistrations';
        this.gridOptions.entityService = this.courseResultService; // TODO entitást létrehozni && modelt
        this.data.setGridOptions(this.gridOptions);
    }

    ngOnInit() {
        this.hasPermission = this.auth.isOrganizationAdmin()
            || (this.auth.isInRole(UserLevel.SysSupport, false)
                || this.auth.isInRole(UserLevel.SysAdmin, false));
    }

    rowClicked(courseResultData: any) {
        const resultId = courseResultData.data.id;
        // Ez fogja betölteni az állapottérbe (Store) a szerverről a detail entitást.
        this.courseResultService.detail<any>(
            `${this.config.baseApiUrl}lmsadmin/courses/` + this.courseId + '/invitations',
            resultId
        ).pipe(
            filter(result => result && result.id === resultId),
            take(1)
        ).subscribe((result) => {
            this.zone.run(() => {
                this.showPreloader = false;
            });
        });
        // Ez ad értéket annak az Observable-nek, amire a template.ben fel vagyunk iratkozva.
        // Az Observable a listából kiválasztott entitást fogja emittálni az állapottérből (Store).
        // Először a shallow entitást, ami be van tölve a listába, majd ha visszaérkezett a válasz a szervertől, a detail entitást.
        this.zone.run(() => {
            this.showPreloader = true;
            this.courseResultDetail$ = this.store.pipe(
                select(fromRoot.CoreSelectors.getEntityByTypeAndId<any>(this.courseResultService.entityType, resultId))
            );
        });
    }

    ngOnDestroy() {
        this.removeSize();
        super.ngOnDestroy();
    }
}
