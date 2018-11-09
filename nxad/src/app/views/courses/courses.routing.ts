// External imports
import { Routes } from '@angular/router';
// Internal imports
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { InviteEmailComponent } from '../courses/course-detail/invite-email/invite-email.component';
import { UserInvitationsComponent } from './course-detail/user-invitations/user-invitations.component';
import { CourseResultsComponent } from './course-detail/course-results/course-results.component';
import { CourseListGuard } from '../../shared/guards/course-list.guard';

export const routes: Routes = [
    {
        path: 'list',
        component: CourseListComponent,
    },
    {
        path: 'details/:id',
        component: CourseDetailComponent,
        resolve: {
            courseList: CourseListGuard
        },
        children: [
            {
                path: 'courseresults',
                component: CourseResultsComponent
            },
            {
                path: 'sendinvitation',
                component: InviteEmailComponent
            },
            {
                path: 'sentinvitation',
                component: UserInvitationsComponent
            },
            {
                path: '', redirectTo: 'courseresults', pathMatch: 'full'
            }
        ]
    },
    {
        path: '', redirectTo: 'list'
    },
];
