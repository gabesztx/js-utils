import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { InviteEmailComponent } from '../../shared/components/invite-email/invite-email.component';

export const routes: Routes = [
    {
        path: '',  redirectTo: 'list'
    },
    {
        path: 'list',
        component: CourseListComponent
    }, {
        path: 'details/:id',
        component: CourseDetailComponent,
        children: [
            {
                path: '', redirectTo: 'sendinvitation', pathMatch: 'full'
            },
            {
                path: 'sendinvitation',
                component: InviteEmailComponent
            },
            /*{
                path: 'sentinvitation',
                component: SentinvitationComponent
            }*/
        ]
    }];
