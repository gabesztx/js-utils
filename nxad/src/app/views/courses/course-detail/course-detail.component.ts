import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserLevel } from '../../../models/user.model';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { BaseSmartComponent } from '../../../shared/components/base-smart-component.class';
import * as fromRoot from '../../../reducers/index.reducer';
import { CourseService } from '../../../shared/entities/course/course.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../../models/course.model';
import { SEARCH_MODEL_LIMIT } from '../../../shared/shared.constants';
import { isCloseCourse } from '../../../shared/utils';

import { GoTo, SearchModel } from '@nexius/core';

// import { GoTo, L10nService, GridController, NxGridOptions } from '@nexius/core';


@Component({
    selector: 'nx-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent extends BaseSmartComponent implements OnInit {
    @Input() menuTitle: 'lbl_menu_title';
    protected subscriptions: { [s: string]: Subscription };
    protected search: SearchModel;
    public courseTitle: string;

    public isClosed: boolean;
    courseDetail$: Observable<any>;
    hasPermission: boolean;

    constructor(
        private store: Store<fromRoot.AppState>,
        private courseService: CourseService,
        private route: ActivatedRoute,
        private auth: AuthService
    ) {
        super();
        this.subscriptions = {courseTitle: null, course: null};
        // this.search = new SearchModel(1, 0, SEARCH_MODEL_LIMIT);
    }

    ngOnInit() {
        /*this.course$ = this.store.select(fromRoot.getSelectedCourse);
        this.subscriptions.course = this.course$.subscribe((res) => {
            // const resultEndDate = res.resultEndDate;
            // this.isClosed = isCloseCourse(resultEndDate);
        });*/

        // TODO: callback alapján leíratni
        const courseId = this.route.snapshot.params['id'];
        this.courseDetail$ = this.store.select(
            fromRoot.CoreSelectors.getEntityByTypeAndId<Course>(this.courseService.entityType, courseId)
        );

        this.courseDetail$.subscribe((res) => {
            if (res) {
                const resultEndDate = res.resultEndDate;
                this.isClosed = isCloseCourse(resultEndDate);
            }
        });
        this.hasPermission = this.auth.isOrganizationAdmin()
            || (this.auth.isInRole(UserLevel.SysSupport, false)
                || this.auth.isInRole(UserLevel.SysAdmin, false));
    }

    navigateBack() {
        this.store.dispatch(new GoTo({
            path: ['courses', 'list'],
        }));
    }
}
