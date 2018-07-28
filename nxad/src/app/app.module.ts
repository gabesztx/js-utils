// External imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
// Nexius Core imports
import { NxCoreModule, SessionEffects, CommonRuntimeConfig, RouterEffects } from '@nexius/core';
// Internal iports
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { reducers } from './reducers/index.reducer';
import { SharedModule } from './shared/shared.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
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

    }

}

