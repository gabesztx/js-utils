import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromGame from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './effects/game.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GameRoutingModule,
    StoreModule.forFeature('game', fromGame.reducers),
    EffectsModule.forFeature([GameEffects])
  ]
})
export class GameModule { }
