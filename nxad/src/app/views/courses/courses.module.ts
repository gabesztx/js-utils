// External imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
// Nexius Core imports
import { NxCoreModule } from '@nexius/core';
// Internal imports
import { routes } from './courses.routing';
import { SharedModule } from '../../shared/shared.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { UserInvitationsComponent } from './course-detail/user-invitations/user-invitations.component';
import { InviteEmailComponent } from './course-detail/invite-email/invite-email.component';
import { CourseResultsComponent } from './course-detail/course-results/course-results.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AgGridModule.withComponents([]),
        NxCoreModule,
        SharedModule
    ],
    declarations: [
        CourseListComponent,
        CourseDetailComponent,
        InviteEmailComponent,
        UserInvitationsComponent,
        CourseResultsComponent
    ]
})
export class CoursesModule { }
