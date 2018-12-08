import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './reducers/index.reducer';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GameDataService } from './services/game-data.service';
import { GameModule } from './view/game/game.module';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    GameModule,
    StoreModule.forRoot(reducers),
    // RouterModule.forRoot(routes),
    // StoreRouterConnectingModule,
  ],
  providers: [GameDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
