import { Routes } from '@angular/router';
// import { PreloadGuard } from './shared/guards/preload.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  // { path: 'game', component: EagerComponent },
];
/*

export const routes: Routes = [
  { path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
  { path: 'lazy', loadChildren: './lazy-routing/lazy.module#LazyModule' }
];
*/

