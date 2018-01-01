import { Routes } from '@angular/router';
import { PreloadGuard } from './services/guards/preload.guard';

export const routes: Routes = [
    {
        path: 'courses',
        canActivate: [PreloadGuard],
        loadChildren: 'app/views/courses/courses.module#CoursesModule'
    },
    {
        path: '',
        redirectTo: 'courses/list/active/1',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'courses/list/active/1',
        pathMatch: 'full'
    }];
