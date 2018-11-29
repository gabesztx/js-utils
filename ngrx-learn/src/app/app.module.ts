import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers/index.reducer';

import { AppComponent } from './app.component';
import { MainGameComponent } from './components/main-game/main-game.component';

import { CardService } from './services/card.service';

@NgModule({
  declarations: [
    AppComponent,
    MainGameComponent
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
