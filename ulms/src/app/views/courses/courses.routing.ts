import { Routes } from '@angular/router';

/* Guard */

import { CoursesRoutingGuard } from '../../services/guards/courses-routing.guard';

/* CoursesGuard Guard */
import { CoursesGuard } from '../../services/guards/courses.guard';
import { CoursesGuard_ } from '../../services/guards/courses.guard_';

/* Recommended Guard */
import { RecommendedGuard } from '../../services/guards/recommended.guard';
import { RecommendedGuard_ } from '../../services/guards/recommended.guard_';

/* Optional Guard */
import { OptionalGuard } from '../../services/guards/optional.guard';


import { UpcomingGuard } from '../../services/guards/upcoming.guard';
import { ClosedGuard } from '../../services/guards/closed.guard';

import { CourseDetailGuard } from '../../services/guards/course-detail.guard';
import { CourseDetailGuard_ } from '../../services/guards/course-detail.guard_';

import { CourseDetailListGuard } from '../../services/guards/course-detail-list.guard';
import { CourseDetailListGuard_ } from '../../services/guards/course-detail-list.guard_';


/* Component */
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CourseListContentComponent } from './course-list-content/course-list-content.component';

import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseDetailListItemComponent } from './course-detail-list-item/course-detail-list-item.component';
import { CourseDetailInfoComponent } from './course-detail-info/course-detail-info.component';

import { CourseTabIndex } from '../../services/course-status-mapper.service';


import { CourseCaniactiveQuard } from '../../services/guards/course-caniactive.quard';
import { CourseCaniactiveChildQuard } from '../../services/guards/course-caniactive-child.quard';

const coursesGuard = (<any>window).env === 'serv' ? CoursesGuard : CoursesGuard_;
const recommendedGuard = (<any>window).env === 'serv' ? RecommendedGuard : RecommendedGuard_;
const courseDetailGuard = (<any>window).env === 'serv' ? CourseDetailGuard : CourseDetailGuard_;
const courseDetailListGuard = (<any>window).env === 'serv' ? CourseDetailListGuard : CourseDetailListGuard_;

export const routes: Routes = [

    {
        path: 'list',
        component: CourseListContentComponent,
        children: [
            {
                path: 'active',
                children: [
                    {
                        path: ':page',
                        component: CourseListItemComponent,
                        canActivate: [/*CoursesRoutingGuard*/],
                        resolve: {
                            responseData: coursesGuard
                        },
                        data: {
                            itemIndex: CourseTabIndex.ACTIVE
                        }
                    },
                    {
                        path: '',
                        redirectTo: '1',
                    }
                ]
            },
            {
                path: 'recommended',
                children: [
                    {
                        path: ':page',
                        component: CourseListItemComponent,
                        canActivate: [/*CoursesRoutingGuard*/],
                        resolve: {
                            responseData: recommendedGuard
                        },
                        data: {
                            itemIndex: CourseTabIndex.RECOMMENDED
                        }
                    },
                    {
                        path: '',
                        redirectTo: '1',
                    }]
            }, {
                path: 'optional',
                children: [
                    {
                        path: ':page',
                        component: CourseListItemComponent,
                        canActivate: [/*CoursesRoutingGuard*/],
                        resolve: {
                            responseData: OptionalGuard
                        },
                        data: {
                            itemIndex: CourseTabIndex.OPTIONAL
                        }
                    },
                    {
                        path: '',
                        redirectTo: '1',
                    }]
            }, {
                path: 'upcoming',
                children: [
                    {
                        path: ':page',
                        component: CourseListItemComponent,
                        canActivate: [/*CoursesRoutingGuard*/],
                        resolve: {
                            responseData: UpcomingGuard
                        },
                        data: {
                            itemIndex: CourseTabIndex.UPCOMING
                        }
                    },
                    {
                        path: '',
                        redirectTo: '1',
                    }]
            }, {
                path: 'closed',
                children: [
                    {
                        path: ':page',
                        component: CourseListItemComponent,
                        canActivate: [/*CoursesRoutingGuard*/],
                        resolve: {
                            responseData: ClosedGuard
                        },
                        data: {
                            itemIndex: CourseTabIndex.CLOSED
                        }
                    },
                    {
                        path: '',
                        redirectTo: '1',
                    }]
            }]
    },

    {
        path: ':courseId',
        component: CourseDetailComponent,
        resolve: {
            responseData: courseDetailGuard
        },
        children: [
            {
                path: 'content',
                component: CourseDetailListItemComponent,
                resolve: {
                    responseData: courseDetailListGuard
                },
            },
            {
                path: 'info',
                component: CourseDetailInfoComponent,
                resolve: {
                    responseData: courseDetailListGuard
                },
            },
            {
                path: '',
                redirectTo: 'content',
            }
        ]
    },

];

/*    {
        path: '',
        redirectTo: '/app/courses/list/active/1',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/app/courses/list/active/1',
        pathMatch: 'full'
    },*/
