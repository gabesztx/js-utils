import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserMediaModule } from './user-media/user-media.module';
import { PeerMediaComponent } from './peer-media/peer-media.component';
import { PeerDataComponent } from './peer-data/peer-data.component';
import { DataChannelComponent } from './data-channel/data-channel.component';

@NgModule({
  declarations: [
    AppComponent,
    PeerMediaComponent,
    PeerDataComponent,
    DataChannelComponent
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
