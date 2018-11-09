// External imports
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Nexius Core imports
import { NxCoreModule, SessionEffects, CommonRuntimeConfig, RouterEffects } from '@nexius/core';
// Internal iports
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { reducers } from './reducers/index.reducer';
import { SharedModule } from './shared/shared.module';
declare var $;

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        ModalModule.forRoot(),
        RouterModule.forRoot(routes),
        /**
         * StoreModule.provideStore is imported once in the root module, accepting a reducer
         * function or object map of reducer functions. If passed an object of
         * reducers, combineReducers will be run creating your application
         * meta-reducer. This returns all providers for an @ngrx/store
         * based application.
         */
        StoreModule.forRoot(reducers),
        /**
         * @ngrx/router-store keeps router state up-to-date in the store and uses
         * the store as the single source of truth for the router's state.
         */
        StoreRouterConnectingModule,
        // Instrumentation must be imported after importing StoreModule (config is optional)
        StoreDevtoolsModule.instrument({
            maxAge: 25 // Retains last 25 states
        }),
        /**
         * EffectsModule.run() sets up the effects class to be initialized
         * immediately when the application starts.
         *
         * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
         */
        EffectsModule.forRoot([RouterEffects, SessionEffects]),
        NxCoreModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(config: CommonRuntimeConfig) {
        config.init('lmsConfiguration');
        const appEnviroment = config['systemType'];
        if (appEnviroment === 'test') {
            $('#appFavicon').attr('href', '/Content/lmsadmin/assets/icons/gray-favicon.png');
        } else {
            $('#relFavicon').attr('href', '/Content/lmsadmin/assets/icons/favicon.ico');
            $('#appFavicon').attr('href', '/Content/lmsadmin/assets/icons/favicon-16x16.png');
        }
    }
 }



