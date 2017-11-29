// External imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import 'hammerjs';
// Internal imports
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { CoreModule } from './core/core.module';

import { environment } from '../environments/environment';
(<any>window).env = environment.envName;

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        ModalModule.forRoot(),
        ServicesModule,
        CoreModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
