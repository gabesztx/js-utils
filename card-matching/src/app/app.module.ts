import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index.reducer';
import { AppComponent } from './app.component';
import { CardBoradComponent} from './components/card-board/card-borad.component';
import { StatusBoardComponent } from './components/status-board/status-board.component';
import { CardComponent } from './components/card/card.component';
import { GameDataService } from './services/game-data.service';
import { ControllerBoardComponent } from './components/controller-board/controller-board.component';
import { GameHeaderComponent } from './components/game-header/game-header.component';

@NgModule({
  declarations: [
    AppComponent,
    CardBoradComponent,
    CardComponent,
    StatusBoardComponent,
    ControllerBoardComponent,
    GameHeaderComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [GameDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
