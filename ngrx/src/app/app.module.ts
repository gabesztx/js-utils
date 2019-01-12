import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { reducers } from './reducers';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StartModule } from './start/start.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    SharedModule,
    StartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
