import { Routes } from '@angular/router';
import { PreloadGuard } from './shared/guards/preload.guard';

export const routes: Routes = [
    {
        path: 'courses',
        canActivate: [PreloadGuard],
        loadChildren: './views/courses/courses.module#CoursesModule'
    },
    {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'courses',
        pathMatch: 'full'
    }];
