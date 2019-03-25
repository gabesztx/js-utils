import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './core/containers/landing-page/landing-page.component';
import { GameDataGuard } from './game/guards/game.quard';


const routes: Routes = [
  {
    path: 'start',
    component: LandingPageComponent
  },
  {
    path: 'game',
    loadChildren: './game/game.module#GameModule',
    canActivate: [GameDataGuard]
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
