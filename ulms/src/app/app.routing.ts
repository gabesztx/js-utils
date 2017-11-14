import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadGuard } from './services/guards/preload.guard';

export const routes: Routes = [{
    // This is the application root route. All application feature areas should be children of this route so that all
    // necessary guards properly activate before loading any feature area.
    path: 'app',
    canActivate: [PreloadGuard], // To defer loading feature areas while resources load.
    children: [{
        path: 'courses',
        loadChildren: 'app/views/courses/courses.module#CoursesModule',

    }]
}, {
    path: '',
    canActivate: [PreloadGuard], // To defer loading feature areas while resources load.
    redirectTo: '/app/courses/list/active/1',
    pathMatch: 'full'
}, {
    path: '**',
    redirectTo: '/app/courses/list/active/1',
    pathMatch: 'full'
}];
