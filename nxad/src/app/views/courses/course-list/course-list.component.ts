// External imports
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
// Nexius Core import
import { L10nService, GoTo } from '@nexius/core';
// Internal imports
import * as fromRoot from '../../../reducers/index.reducer';
import * as fromCourseModel from '../../../models/course.model';
import { UserLevel } from '../../../models/user.model';
import { CourseService } from '../../../shared/entities/course/course.service';
import { NxGridOptions } from '../../../shared/grid/grid-model.class';
import { GridController } from '../../../shared/grid/grid-controller.class';
import { GridCellButtonComponent } from '../../../shared/grid/cellRenderers/grid-cell-button/grid-cell-button.component';
import { dateRenderer } from '../../../shared/utils';
import { AuthService } from '../../../shared/services/auth.service';


@Component({
    selector: 'nx-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent extends GridController implements OnInit, OnDestroy {

    hasPermission: boolean;

    courses$: Observable<fromCourseModel.Course[]>;
    /**
     * @property subscriptions
     * @description
     * A map of subscriptions used by the Component. OnDestroys unsubscribes all enlisted subscriptions.
     * @private
     * @memberof SidebarNavComponent
     */
    protected subscriptions: {[s: string]: Subscription};

    /**
     * @property gridOptions
     * @type NxGridOptions
     * @description
     * Define options for the Content List ag-Grid instance here.
     */
    private gridOptions: NxGridOptions = {
        columnDefs: [{
            headerName: 'lbl_title',
            field: 'title'
        }, {
            headerName: 'lbl_course_provider_short',
            field: 'provider.name', // Name of the field in source data object to bind to the column
            width: 250,
            suppressSizeToFit: true
        }, {
            headerName: 'lbl_registration_start_date',
            field: 'registrationStartDate', // Name of the field in source data object to bind to the column
            cellRenderer: (params) => dateRenderer(params.data.registrationStartDate),
            width: 250,
            suppressSizeToFit: true
        }, {
            headerName: 'lbl_registration_end_date',
            field: 'registrationEndDate', // Name of the field in source data object to bind to the column
            cellRenderer: (params) => dateRenderer(params.data.registrationEndDate),
            width: 250,
            suppressSizeToFit: true
        }, {
            headerName: 'lbl_result_start_date',
            field: 'resultStartDate', // Name of the field in source data object to bind to the column
            cellRenderer: (params) => dateRenderer(params.data.resultStartDate),
            width: 250,
            suppressSizeToFit: true
        }, {
            headerName: 'lbl_result_end_date',
            field: 'resultEndDate', // Name of the field in source data object to bind to the column
            cellRenderer: (params) => dateRenderer(params.data.resultEndDate),
            width: 250,
            suppressSizeToFit: true
        }, {
            headerName: '',
            label: 'btn_view',
            // iconClass: 'fa-pencil',
            width: 150,
            cellRendererFramework: GridCellButtonComponent,
            action: this.onClickEdit.bind(this),
            suppressMenu: true,
            suppressFilter: true,
            suppressSorting: true,
            suppressResize: true,
            suppressSizeToFit: true
        }]
    };

    constructor(
        private route: ActivatedRoute,
        private store: Store<fromRoot.AppState>,
        private l10n: L10nService,
        private auth: AuthService,
        private courseService: CourseService
    ) {
        super(l10n);

        this.subscriptions = {
            courses: null
        };
        this.vm.setGridOptions(this.gridOptions);
    }

    ngOnInit() {
        // Print courses array when its not empty - for testing
        this.courses$ = this.store.select(fromRoot.getCourses);
        // Call list method on course service to load the course list to the Store.
        this.courseService.list(this.search).subscribe();
        // Check permission
        this.hasPermission = this.auth.isInRole(UserLevel.Administrator);
    }

    onReady(): void {
        // Optionally call GridController's onReady implementation.
        super.onReady();
        this.subscriptions.courses = this.courses$.subscribe((courses) => {
            this.vm.gridOptions.api.setRowData(courses);
        });
    }

    ngOnDestroy() {
        for (const sub in this.subscriptions) {
            if (this.subscriptions[sub] instanceof Subscription) {
                this.subscriptions[sub].unsubscribe();
            }
        }
    }

    onClickEdit(widgetData: fromCourseModel.Course) {
        this.store.dispatch(new GoTo({
            path: ['details', widgetData.id],
            extras: { relativeTo: this.route.parent }
        }));

    }


}
