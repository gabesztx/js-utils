import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStateSerializer } from '@ngrx/router-store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { GameModule } from './view/game/game.module';
import { StartModule } from './view/start/start.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { reducers } from './reducers/index.reducer';
import { routes } from './app.routing';
import { CustomSerializer } from './shared/utils';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    StartModule,
    GameModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'})
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomSerializer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
