import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index.reducer';
import { AppComponent } from './app.component';
import { GameBoradComponent } from './components/game-board/game-borad.component';
import { StatusBoardComponent } from './components/status-board/status-board.component';
import { CardComponent } from './components/card/card.component';
import { CardService } from './services/card.service';
import { ControllerBoardComponent } from './components/controller-board/controller-board.component';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    GameBoradComponent,
    CardComponent,
    StatusBoardComponent,
    ControllerBoardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    // StoreDevtoolsModule.instrument({ maxAge: 50}),
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
