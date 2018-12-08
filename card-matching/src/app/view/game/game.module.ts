import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusBoardComponent } from './components/status-board/status-board.component';
import { CardBoradComponent } from './components/card-board/card-borad.component';
import { CardComponent } from './components/card/card.component';
import { ControllerBoardComponent } from './components/controller-board/controller-board.component';

@NgModule({
  declarations: [
    StatusBoardComponent,
    CardBoradComponent,
    CardComponent,
    ControllerBoardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusBoardComponent,
    CardBoradComponent,
    CardComponent,
    ControllerBoardComponent,
  ]
})
export class GameModule {
}
