import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {removeNgStyles, createNewHosts} from '@angularclass/hmr';
import {AppComponent} from './app.component';
import {HeaderComponent} from './views/header/header.component';
import {FooterComponent} from './views/footer/footer.component';

import '../style/main.scss'

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) {
    }

    hmrOnInit(store: any) {
    }

    hmrOnDestroy(store: any) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store: any) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
