import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DecoratorsComponent } from './components/decorators-component/decorators.component';
import { FormModule } from './form/form.module';
import { ReflectMetadataComponent } from './components/reflect-metadata/reflect-metadata.component';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { DataService } from "./services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DecoratorsComponent,
    ReflectMetadataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormModule,
    // InMemoryWebApiModule.forRoot(DataService)  https://angular.io/tutorial/toh-pt6
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
