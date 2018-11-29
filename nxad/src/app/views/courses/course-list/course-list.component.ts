// External imports
import { BehaviorSubject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
// Nexius Core import
import { GoTo, L10nService, GridController, NxGridOptions, CommonRuntimeConfig, ListFilterConfig, FilterModel } from '@nexius/core';
// Internal imports
import * as fromRoot from '../../../reducers/index.reducer';
import * as fromCourseModel from '../../../models/course.model';
import { UserLevel } from '../../../models/user.model';
import { CourseService } from '../../../shared/entities/course/course.service';
import { GridCellButtonComponent } from '../../../shared/grid/cellRenderers/grid-cell-button/grid-cell-button.component';
import { dateRenderer, isCloseCourse } from '../../../shared/utils';
import { AuthService } from '../../../shared/services/auth.service';

declare let window: any;

@Component({
    selector: 'nx-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent extends GridController implements OnInit, OnDestroy {
    hasPermission: boolean;
    selectedAddDropDown$: any;
    public filterStatusConfig = {
        filterName: 'isactivestate',
        placeHolder: this.l10n.translate('lbl_courses_status'),
        option: [
            {
                value: 0,
                title: this.l10n.translate('lbl_all')
            },
            {
                value: true,
                title: this.l10n.translate('lbl_active')
            },
            {
                value: false,
                title: this.l10n.translate('lbl_closed_courses')
            },
        ],
        initialFilter: new FilterModel('isactivestate', true),
    };
    public filterConfig: ListFilterConfig = {
        fields: [{
            name: 'coursetitle',
            label: 'lbl_title'
        }, {
            name: 'providername',
            label: 'lbl_course_provider_short'
        }],
        fireOnInputChange: true, // can we do it without pressEnterLabelKey?
        showResetButton: false,
        showSearchButton: true,
        filterButtonLabel: '.',
        filterFieldSelectPlaceholder: this.l10n.translate('lbl_filter_field'),
        filterTextFieldPlaceholder: this.l10n.translate('lbl_filter_text'),
        resetButtonLabel: this.l10n.translate('btn_reset_grid'),
        // pressEnterLabelKey: this.l10n.translate('lbl_press_enter'),
    };

    private gridOptions: NxGridOptions = {
        enableColResize: true,
        defaultColDef: {
            suppressFilter: true,
            suppressMenu: true
        },
        columnDefs: [{
            headerName: 'lbl_title',
            field: 'title',
        }, {
            headerName: 'lbl_course_provider_short',
            colId: 'providername',
            field: 'provider.name', // Name of the field in source data object to bind to the column
        }, {
            headerName: 'lbl_enrollment_period_begins',
            field: 'registrationStartDate', // Name of the field in source data object to bind to the column
            cellRenderer: (params) => dateRenderer(params.value),
            colId: 'startdate'
        }, {
            headerName: 'lbl_enrollment_period_ends',
            field: 'registrationEndDate', // Name of the field in source data object to bind to the column
            cellRenderer: (params) => dateRenderer(params.value),
            colId: 'enddate'
        }, {
            headerName: 'lbl_result_start_date',
            field: 'resultStartDate', // Name of the field in source data object to bind to the column
            cellRenderer: (params) => dateRenderer(params.value),
            colId: 'resultstartdate'
        }, {
            headerName: 'lbl_result_end_date',
            field: 'resultEndDate', // Name of the field in source data object to bind to the column
            cellRenderer: (params) => dateRenderer(params.value),
            colId: 'resultenddate'
        }, {
            headerName: 'lbl_course_status',
            field: 'isActive', // Name of the field in source data object to bind to the column
            cellRenderer: (params) => {
                const isActive = params.value || false;
                const closed = this.l10n.translate('lbl_closed_courses');
                const active = this.l10n.translate('lbl_active');
                return isActive ? active : '<div style="color:red">' + closed + '</div>';
            },
            width: 250,
            suppressSizeToFit: true
        }, {
            headerName: '',
            label: 'btn_view',
            // iconClass: 'fa-pencil',
            width: 150,
            cellRendererFramework: GridCellButtonComponent,
            action: this.onClickEdit.bind(this),
            suppressSorting: true,
            suppressResize: true,
            suppressSizeToFit: true
        }],
        onRowDoubleClicked: this.rowDoubleClicked.bind(this),
        initialFilters: this.filterStatusConfig.hasOwnProperty('initialFilter') ? [this.filterStatusConfig.initialFilter] : []
    };

    constructor(
        private route: ActivatedRoute,
        protected store: Store<fromRoot.AppState>,
        protected l10n: L10nService,
        private auth: AuthService,
        private config: CommonRuntimeConfig,
        private courseService: CourseService) {
        super(store, window, l10n);
        this.gridOptions.apiUrl = `${this.config.baseApiUrl}lmsadmin/courses`;
        this.gridOptions.entityService = this.courseService;
        this.setGridOptions(this.gridOptions);
    }

    ngOnInit() {
        // Check permission
        this.selectedAddDropDown$ = this.store.select(fromRoot.getdropDownState);
        this.hasPermission = this.auth.isOrganizationAdmin()
            || (this.auth.isInRole(UserLevel.SysSupport, false)
                || this.auth.isInRole(UserLevel.SysAdmin, false));
    }

    onReady() {
        super.onReady();
    }

    onClickEdit(widgetData: fromCourseModel.Course) {
        this.store.dispatch(new GoTo({
            path: ['details', widgetData.id],
            extras: {relativeTo: this.route.parent}
        }));
    }

    rowDoubleClicked(row: any) {
        const widgetData = row.data;
        this.store.dispatch(new GoTo({
            path: ['details', widgetData.id],
            extras: {relativeTo: this.route.parent}
        }));
    }

    ngOnDestroy() {
        this.removeSize();
        super.ngOnDestroy();
    }
}
