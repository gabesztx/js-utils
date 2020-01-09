import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Step01Component } from './components/step01/step01.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { HttpsComponent } from './components/https/https.component';
import { VideocallComponent } from './components/videocall/videocall.component';
import { JanusComponent } from './components/janus/janus.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Step01Component,
    SandboxComponent,
    HttpsComponent,
    VideocallComponent,
    JanusComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
