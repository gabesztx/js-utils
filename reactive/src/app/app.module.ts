import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CombinationModule } from './combination/combination.module';
import { StarterModule } from './starter/starter.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarterModule,
    CombinationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
