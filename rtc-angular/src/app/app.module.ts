import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserMediaModule } from './user-media/user-media.module';
import { PeerComponent } from './peer/peer.component';
import { PeerMediaComponent } from './peer-media/peer-media.component';

@NgModule({
  declarations: [
    AppComponent,
    PeerComponent,
    PeerMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserMediaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
