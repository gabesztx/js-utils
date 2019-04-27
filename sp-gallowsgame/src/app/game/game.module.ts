import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GameEffects } from './effects/game.effects';
import { GamePageComponent } from './containers/game-page/game-page.component';
import { GameRoutingModule } from './game-routing.module';
import { LettersListComponent } from './components/letter-list/letters-list.component';
import { LetterComponent } from './components/letter/letter.component';

import * as fromGame from './reducers';
import { LetterWrongListComponent } from './components/letter-wrong-list/letter-wrong-list.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    StoreModule.forFeature('game', fromGame.reducers),
    EffectsModule.forFeature([GameEffects])
  ],
  declarations: [GamePageComponent, LettersListComponent, LetterComponent, LetterWrongListComponent],
})
export class GameModule { }
