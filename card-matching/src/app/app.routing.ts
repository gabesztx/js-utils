import { Routes } from '@angular/router';
import { LandingPageComponent } from './view/start/components/landing-page/landing-page.component';
import { GamePageComponent } from './view/game/components/game-page/game-page.component';
// import { PreloadGuard } from './shared/guards/preload.guard';


export const routes: Routes = [
  {
    path: 'start',
    component: LandingPageComponent
  },
  {
    path: 'game',
    component: GamePageComponent
  },
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: '**', redirectTo: 'start', pathMatch: 'full'},
];
