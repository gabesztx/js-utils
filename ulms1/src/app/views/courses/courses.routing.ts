import {Routes} from '@angular/router';

/* Courses Routing Guard */
import {CoursesRoutingGuard} from '../../services/guards/courses-routing.guard';


/* Course List Api Loader Guard */
import {CourseListApiLoaderGuard} from '../../services/guards/course-list-api-loader.guard';

/* Courses Detail Routing Guard */
import {CoursesDetailRoutingGuard} from '../../services/guards/courses-detail-routing.guard';

/* CoursesGuard Guard */
import {CoursesGuard} from '../../services/guards/courses.guard';
import {CoursesGuard_} from '../../services/guards/courses.guard_';

/* Recommended Guard */
import {RecommendedGuard} from '../../services/guards/recommended.guard';
import {RecommendedGuard_} from '../../services/guards/recommended.guard_';

/* Optional Guard */
import {OptionalGuard} from '../../services/guards/optional.guard';
import {OptionalGuard_} from '../../services/guards/optional.guard_';

/* Upcoming Guard */
import {UpcomingGuard} from '../../services/guards/upcoming.guard';
import {UpcomingGuard_} from '../../services/guards/upcoming.guard_';

import {ClosedGuard} from '../../services/guards/closed.guard';
import {ClosedGuard_} from '../../services/guards/closed.guard_';

/* CourseDetail Guard */
import {CourseDetailGuard} from '../../services/guards/course-detail.guard';
import {CourseDetailGuard_} from '../../services/guards/course-detail.guard_';

/* CourseDetail List Guard */
import {CourseDetailListGuard} from '../../services/guards/course-detail-list.guard';
import {CourseDetailListGuard_} from '../../services/guards/course-detail-list.guard_';


/* Courses Feeds */
import {CourseFeedsGuard} from '../../services/guards/course-feeds.guard';


/* Component */
import {CourseListItemComponent} from './course-list-item/course-list-item.component';
import {CourseListContentComponent} from './course-list-content/course-list-content.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {CourseDetailListItemComponent} from './course-detail-list-item/course-detail-list-item.component';
import {CourseDetailInfoComponent} from './course-detail-info/course-detail-info.component';
import {CourseFeedComponent} from './course-feed/course-feed.component';

/* Services */
import {CourseTabIndex} from '../../services/course-status-mapper.service';

import {CourseCaniactiveQuard} from '../../services/guards/course-caniactive.quard';
import {CourseCaniactiveChildQuard} from '../../services/guards/course-caniactive-child.quard';

// const coursesGuard = (<any>window).env === 'serv' ? CoursesGuard : CoursesGuard_;
const coursesGuard = (<any>window).env === 'serv' ? CoursesGuard : CoursesGuard_;
const recommendedGuard = (<any>window).env === 'serv' ? RecommendedGuard : RecommendedGuard_;
const optionalGuard = (<any>window).env === 'serv' ? OptionalGuard : OptionalGuard_;
const upcomingGuard = (<any>window).env === 'serv' ? UpcomingGuard : UpcomingGuard_;
const clouseGuard = (<any>window).env === 'serv' ? ClosedGuard : ClosedGuard_;
const courseDetailGuard = (<any>window).env === 'serv' ? CourseDetailGuard : CourseDetailGuard_;
const courseDetailListGuard = (<any>window).env === 'serv' ? CourseDetailListGuard : CourseDetailListGuard_;
const courseFeedsGuard = (<any>window).env === 'serv' ? CourseFeedsGuard : CourseFeedsGuard;
// const courseListApiLoaderGuard = (<any>window).env === 'serv' ? CourseDetailListGuard : CourseDetailListGuard_;

export const routes: Routes = [{
    path: '',
    redirectTo: 'list/active/1'
}, {
    path: 'feed',
    component: CourseFeedComponent,
    resolve: {
        responseData: courseFeedsGuard
    },
    data: {
        class: 'main'
    }
}, {
    path: 'list',
    component: CourseListContentComponent,
   /* canActivate: [CourseListApiLoaderGuard],*/
    children: [{
        path: 'active',
        children: [{
            path: ':page',
            component: CourseListItemComponent,
            canActivate: [CourseListApiLoaderGuard],
            resolve: {
                responseData: coursesGuard
            },
            data: {
                itemIndex: CourseTabIndex.ACTIVE
            }
        }, {
            path: '',
            redirectTo: '1',
        }]
    }, {
        path: 'recommended',
        children: [{
            path: ':page',
            component: CourseListItemComponent,
            canActivate: [/*CoursesRoutingGuard*/],
            resolve: {
                responseData: recommendedGuard
            },
            data: {
                itemIndex: CourseTabIndex.RECOMMENDED
            }
        }, {
            path: '',
            redirectTo: '1',
        }]
    }, {
        path: 'optional',
        children: [{
            path: ':page',
            component: CourseListItemComponent,
            canActivate: [/*CoursesRoutingGuard*/],
            resolve: {
                responseData: optionalGuard
            },
            data: {
                itemIndex: CourseTabIndex.OPTIONAL
            }
        }, {
            path: '',
            redirectTo: '1',
        }]
    }, {
        path: 'upcoming',
        children: [{
            path: ':page',
            component: CourseListItemComponent,
            canActivate: [/*CoursesRoutingGuard*/],
            resolve: {
                responseData: upcomingGuard
            },
            data: {
                itemIndex: CourseTabIndex.UPCOMING
            }
        }, {
            path: '',
            redirectTo: '1',
        }]
    }, {
        path: 'closed',
        children: [{
            path: ':page',
            component: CourseListItemComponent,
            canActivate: [/*CoursesRoutingGuard*/],
            resolve: {
                responseData: clouseGuard
            },
            data: {
                itemIndex: CourseTabIndex.CLOSED
            }
        }, {
            path: '',
            redirectTo: '1',
        }]
    }, {
        path: '',
        redirectTo: 'active/1'
    }]
}, {
    path: ':courseId',
    component: CourseDetailComponent,
    resolve: {
        responseData: courseDetailGuard
    },
    children: [
        {
            path: '',
            canActivate: [CoursesDetailRoutingGuard],
        }, {
            path: 'content',
            component: CourseDetailListItemComponent,
            resolve: {
                responseData: courseDetailListGuard
            },
        }, {
            path: 'info',
            component: CourseDetailInfoComponent,
            resolve: {
                responseData: courseDetailListGuard
            },
        }, {
            path: 'feed',
            component: CourseFeedComponent,
            resolve: {
                responseData: courseDetailListGuard
            },
        }
    ]
}];
