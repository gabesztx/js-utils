import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './game/containers/landing-page/landing-page.component';
import { GamePageComponent } from './game/containers/game-page/game-page.component';

const routes: Routes = [
  {
    path: 'start',
    component: LandingPageComponent
  },
  {
    path: 'game',
    component: GamePageComponent
  },
  {
    path: 'start',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'start',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
