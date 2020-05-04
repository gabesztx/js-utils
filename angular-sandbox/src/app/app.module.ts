import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DecoratorsComponent } from './components/decorators-component/decorators.component';
import { FormsModule } from './forms/forms.module';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { DataService } from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DecoratorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    // InMemoryWebApiModule.forRoot(DataService)  https://angular.io/tutorial/toh-pt6
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
