import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GameRoutingModule,
    StoreModule.forFeature('game', reducers)
  ]
})
export class GameModule {
}
