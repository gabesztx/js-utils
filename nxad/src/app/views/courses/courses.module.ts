// External imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
// Nexius Core imports
import { NxCoreModule } from '@nexius/core';
// Internal imports
import { SharedModule } from '../../shared/shared.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
// Nexius Core imorts
// ...

import { routes } from './courses.routing';

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
        CourseDetailComponent
    ]
})
export class CoursesModule { }
