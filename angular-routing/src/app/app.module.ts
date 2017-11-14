import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule	} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { AppRoutingModule } from './main.routing';

/* Component */
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		// FormsModule,
		// HttpModule,
		AppRoutingModule,
	],
	declarations: [
		AppComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(public appRef: ApplicationRef) {
	}

	hmrOnInit(store) {
		// console.log('HMR store', store);
	}

	hmrOnDestroy(store) {
		let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
		// recreate elements
		store.disposeOldHosts = createNewHosts(cmpLocation);
		// remove styles
		removeNgStyles();
	}

	hmrAfterDestroy(store) {
		// display new elements
		store.disposeOldHosts();
		delete store.disposeOldHosts;
	}
}
