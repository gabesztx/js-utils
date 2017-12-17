// External imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
// Internal imports
import { L10nService } from './l10n.service';
import { RuntimeConfigService } from './runtime-config.service';
import { UserService } from './user.service';
import { PreloadGuard } from './guards/preload.guard';

/* Preferences */
import { PreferencesService } from './preferences.service';

/* Course List Api Loader */
import { CourseListApiLoaderService } from './course-list-api-loader.service';
import { CourseListApiLoaderGuard } from './guards/course-list-api-loader.guard';

/* Courses Routing Guard */
import { CoursesRoutingGuard } from './guards/courses-routing.guard';

/* Courses Details Routing Guard */
import { CoursesDetailRoutingGuard } from './guards/courses-detail-routing.guard';

/* Feeds */
import { CourseFeedsService } from './course-feeds.service';
import { CourseFeedsGuard } from './guards/course-feeds.guard';

/* Courses Result Detial */
import { CourseResultDetail } from './course-result-detail';

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
import { ClosedGuard_ } from './guards/closed.guard_';
import { ClosedService_ } from './closed.service_';

/* Upcoming */
import { UpcomingGuard } from './guards/upcoming.guard';
import { UpcomingGuard_ } from './guards/upcoming.guard_';
import { UpcomingService_ } from './upcoming.service_';

/* Services */
import { CommonService } from './common/common.service';
import { ModalHandlerService } from './modal-handler.service';

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
        PreloadGuard,
        PreferencesService,

        CoursesRoutingGuard,
        CoursesDetailRoutingGuard,

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
        ClosedGuard_,
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

        CourseCaniactiveQuard,
        ModalHandlerService,

        CourseListApiLoaderService,
        CourseListApiLoaderGuard,

        CourseFeedsService,
        CourseFeedsGuard,

        CourseResultDetail
    ]
})
export class ServicesModule { }
