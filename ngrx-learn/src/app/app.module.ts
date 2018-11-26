import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers/index.reducer';

import { AppComponent } from './app.component';
import { MainGameComponent } from './components/main-game/main-game.component';

/*export function instrumentOptions() {
  return {
    monitor: useLogMonitor({visible: true, position: 'right'})
  };
}*/

@NgModule({
  declarations: [
    AppComponent,
    MainGameComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 50
    }),
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
