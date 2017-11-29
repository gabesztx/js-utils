// External imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';


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
        CoreModule,
        RouterModule.forRoot(routes),
        ModalModule.forRoot(),
        ServicesModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
