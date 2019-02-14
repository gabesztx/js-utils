import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './effects/game.effects';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { GamePageComponent } from './containers/game-page/game-page.component';
import { GameDataService } from './services/game-data.service';
import { CoreModule } from '../core/core.module';
import { CardBoardComponent } from './containers/card-board/card-board.component';
import { CardComponent } from './components/card/card.component';
import { StatusBoardComponent } from './containers/status-board/status-board.component';
import { ControllerBoardComponent } from './containers/controller-board/controller-board.component';
import { SelectorPageComponent } from './containers/selector-page/selector-page.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    GamePageComponent,
    CardBoardComponent,
    CardComponent,
    StatusBoardComponent,
    ControllerBoardComponent,
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    StoreModule.forFeature('game', reducers),
    StoreModule.forFeature('time', reducers),
    EffectsModule.forFeature([GameEffects])
  ],
  providers: [
    GameDataService
  ],
  exports: [
    LandingPageComponent,
    GamePageComponent,
    SelectorPageComponent,
  ]
})
export class GameModule {
}
