import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers/index.reducer';

import { AppComponent } from './app.component';
import { MainGameComponent } from './components/main-game/main-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MainGameComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      // maxAge: 50
    }), // maxAge: 10, logOnly:environment.production
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
