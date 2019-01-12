import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './effects/game.effects';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    StoreModule.forFeature('game', reducers),
    EffectsModule.forFeature([GameEffects]),
  ]
})
export class GameModule {
}
