import { Routes } from '@angular/router';
// import { PreloadGuard } from './shared/guards/preload.guard';
import { LandingPageComponent } from './view/start/components/landing-page/landing-page.component';
import { GamePageComponent } from './view/game/components/game-page/game-page.component';


export const routes: Routes = [
  {path: 'start', component: LandingPageComponent},
  {path: 'game', component: GamePageComponent},
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: '**', redirectTo: 'start', pathMatch: 'full'},
];
