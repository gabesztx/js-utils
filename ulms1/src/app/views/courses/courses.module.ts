// External imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';
// import {NgTemplateOutlet} from '@angular/common';
// Internal imports

import { routes } from './courses.routing';
import { CoreModule } from '../../core/core.module';
import { CoursesComponent } from './courses.component';
import { CourseListContentComponent } from './course-list-content/course-list-content.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseActiveComponent } from './course-active/course-active.component';
import { CourseRecommendedComponent } from './course-recommended/course-recommended.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

import { CourseDetailInfoComponent } from './course-detail-info/course-detail-info.component';
import { CourseClosedComponent } from './course-closed/course-closed.component';
import { CourseOptionalComponent } from './course-optional/course-optional.component';
import { CourseUpcomingComponent } from './course-upcoming/course-upcoming.component';
import { CourseDetailListItemComponent } from './course-detail-list-item/course-detail-list-item.component';
import { CourseDetailMainItemComponent } from './course-detail-main-item/course-detail-main-item.component';
import { CourseDetailFeedComponent } from './course-detail-feed/course-detail-feed.component';


@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        MomentModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        CoursesComponent,
        CourseListContentComponent,
        CourseListItemComponent,
        CourseActiveComponent,
        CourseRecommendedComponent,
        CourseDetailComponent,
        CourseDetailInfoComponent,
        CourseClosedComponent,
        CourseOptionalComponent,
        CourseUpcomingComponent,
        CourseDetailListItemComponent,
        CourseDetailMainItemComponent,
        CourseDetailFeedComponent
    ],
    // bootstrap: [CoursesComponent],
    exports: []
})
export class CoursesModule {
}
