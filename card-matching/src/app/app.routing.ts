import { Routes } from '@angular/router';
import { LandingPageComponent } from './view/start/components/landing-page/landing-page.component';
import { GamePageComponent } from './view/game/components/game-page/game-page.component';
import { PagedataGuard } from './guards/pagedata.guard';

export const routes: Routes = [
  {
    path: 'start',
    canActivate: [PagedataGuard],
    component: LandingPageComponent
  },
  {
    path: 'game',
    canActivate: [PagedataGuard],
    component: GamePageComponent
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'start',
    pathMatch: 'full'
  },
];
