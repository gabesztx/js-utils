import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './effects/game.effects';
import { LandingPageComponent } from './landing-page/landing-page.component';
import * as fromGame from './reducers/game.reducer';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('game', fromGame.reducer),
    EffectsModule.forFeature([GameEffects])
  ],
  exports: [LandingPageComponent]
})
export class GameModule { }
