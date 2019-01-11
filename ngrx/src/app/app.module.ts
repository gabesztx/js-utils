import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { GameModule } from './game/game.module';
import * as fromGame from './game/reducers/game.reducer';
import { GameEffects } from './game/effects/game.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    GameModule,
    StoreModule.forFeature('game', fromGame.reducer),
    EffectsModule.forFeature([GameEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
