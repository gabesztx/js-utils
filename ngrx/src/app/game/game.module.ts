import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/game.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './effects/game.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GameRoutingModule,
    StoreModule.forFeature('game', reducer),
    EffectsModule.forFeature([GameEffects])
  ]
})
export class GameModule {
}
