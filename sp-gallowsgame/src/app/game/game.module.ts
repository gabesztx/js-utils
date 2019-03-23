import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GameEffects } from './effects/game.effects';
import { GamePageComponent } from './containers/game-page/game-page.component';
import { GameRoutingModule } from './game-routing.module';

import * as fromGame from './reducers';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    StoreModule.forFeature('game', fromGame.reducers),
    EffectsModule.forFeature([GameEffects])
  ],
  declarations: [GamePageComponent],
})
export class GameModule { }
