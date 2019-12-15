import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectComponent } from './components/connect/connect.component';
import { Step01Component } from './components/step01/step01.component';
import { PeerconnectionComponent } from './components/peerconnection/peerconnection.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    Step01Component,
    PeerconnectionComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
