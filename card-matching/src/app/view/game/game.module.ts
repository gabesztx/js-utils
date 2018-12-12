import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusBoardComponent } from './components/status-board/status-board.component';
import { CardBoradComponent } from './components/card-board/card-borad.component';
import { CardComponent } from './components/card/card.component';
import { ControllerBoardComponent } from './components/controller-board/controller-board.component';
import { GamePageComponent } from './components/game-page/game-page.component';


@NgModule({
  declarations: [
    GamePageComponent,
    StatusBoardComponent,
    CardBoradComponent,
    CardComponent,
    ControllerBoardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GamePageComponent,
    StatusBoardComponent,
    CardBoradComponent,
    CardComponent,
    ControllerBoardComponent,
  ],
})
export class GameModule {
}
