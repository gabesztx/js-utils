// External imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
// Internal imports
import { L10nService } from './l10n.service';
import { RuntimeConfigService } from './runtime-config.service';
import { UserService } from './user.service';
import { PreloadGuard } from './guards/preload.guard';
import { CoursesRoutingGuard } from './guards/courses-routing.guard';

/* Courses */
import { CourseService } from './course.service';
import { CourseService_ } from './course.service_';
import { CoursesGuard } from './guards/courses.guard';
import { CoursesGuard_ } from './guards/courses.guard_';

/* Recommended */
import { RecommendedGuard_ } from './guards/recommended.guard_';
import { RecommendedGuard } from './guards/recommended.guard';
import { RecommendedService_ } from './recommended.service_';
import { RecommendedService } from './recommended.service';

/* Optional */
import { OptionalGuard } from './guards/optional.guard';
import { OptionalGuard_ } from './guards/optional.guard_';
import { OptionalService } from './optional.service';
import { OptionalService_ } from './optional.service_';

/* Close */
import { ClosedGuard } from './guards/closed.guard';
import { ClosedService_ } from './closed.service_';


import { UpcomingGuard } from './guards/upcoming.guard';
import { UpcomingGuard_ } from './guards/upcoming.guard_';
import { UpcomingService_ } from './upcoming.service_';


import { CommonService } from './common/common.service';

import { CourseDetailGuard } from './guards/course-detail.guard';
import { CourseDetailGuard_ } from './guards/course-detail.guard_';

import { CourseDetailListGuard } from './guards/course-detail-list.guard';
import { CourseDetailListGuard_ } from './guards/course-detail-list.guard_';


import { CourseDetailService } from './course-detail.service';
import { CourseDetailService_ } from './course-detail.service_';

import { CourseStatusMapperService } from './course-status-mapper.service';

import { CourseCaniactiveQuard } from './guards/course-caniactive.quard';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [],
    providers: [
        L10nService,
        RuntimeConfigService,
        UserService,
        CoursesRoutingGuard,
        PreloadGuard,

        CourseService,
        CourseService_,

        CoursesGuard,
        CoursesGuard_,

        RecommendedGuard,
        RecommendedGuard_,

        RecommendedService,
        RecommendedService_,

        UpcomingGuard,
        UpcomingGuard_,

        UpcomingService_,

        ClosedGuard,
        ClosedService_,


        OptionalGuard,
        OptionalGuard_,

        OptionalService,
        OptionalService_,

        CommonService,

        CourseDetailGuard,
        CourseDetailGuard_,

        CourseDetailListGuard,
        CourseDetailListGuard_,

        CourseDetailService,
        CourseDetailService_,

        CourseStatusMapperService,

        CourseCaniactiveQuard
    ]
})
export class ServicesModule { }
