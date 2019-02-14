import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './game/containers/landing-page/landing-page.component';
import { GamePageComponent } from './game/containers/game-page/game-page.component';
import { SelectorPageComponent } from './game/containers/selector-page/selector-page.component'
import { GameDataGuard } from './game/services/game-data.guard';

const routes: Routes = [
  {
    path: 'start',
    component: LandingPageComponent
  },
  {
    path: 'game',
    component: GamePageComponent,
    canActivate: [GameDataGuard]
  },
  {
    path: 'selector',
    component: SelectorPageComponent,
    // canActivate: [GameDataGuard]
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
  providers: [GameDataGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
