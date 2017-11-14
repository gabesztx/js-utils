import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule	} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowser }    from '@angular/platform-browser';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { AppRoutingModule, routedComponents } from './main.routing';
/* Service */
import { MessageService } from './service/index';

/* Component */
import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { HeroParentComponent } from './component-param/hero-parent.component';
import { HeroChildComponent } from './component-param/hero-child.component';
import { NameParentComponent } from './component-interaction/name-parent/name-parent.component';
import { NameChildComponent } from './component-interaction/name-child/name-child.component';
import { VersionChildComponent } from './componenet-input-change/version-child/version-child.component';
import { VersionParentComponent } from './componenet-input-change/version-parent/version-parent.component';
import { VoterComponent } from './componenet-output/voter/voter.component';
import { VoterParentComponent } from './componenet-output/voter-parent/voter-parent.component';
import { CountdownTimerComponent } from './componenet-local-varible/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './componenet-local-varible/countdown-parent/countdown-parent.component';
import { CountdownViewchildParentComponent } from './component-view-child/countdown-viewchild-parent/countdown-viewchild-parent.component';
import { CountdownViewchildTimerComponent } from './component-view-child/countdown-viewchild-timer/countdown-viewchild-timer.component';
import { CommponentCommunicateComponent } from './commponent-communicate-service/commponent-communicate/commponent-communicate.component';
import { CommponentMessageComponent } from './commponent-communicate-service/commponent-message/commponent-message.component';
import { CommponentStylesComponent } from './commponent-styles/commponent-styles.component';
import { LoaderComponent } from './component-if-template/lodader.component';
import {
	AfterContentParentComponent,
	AfterContentComponent,
	ChildComponent
} from './lifecycleHooks/after-content/after-content.component';
import {
	AfterViewParentComponent,
	AfterViewComponent,
	ChildViewComponent
} from './lifecycleHooks/after-view/after-view.component';
import { FontComponentComponent } from './font-component/font-component.component';

// import { Page1Component } from './routing/page1/page1.component';
// import { Page2Component } from './routing/page2/page2.component';
// import { Page3Component } from './routing/page3/page3.component';
// import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
	],
	declarations: [
		AppComponent,
		DisplayDataComponent,
		HeroParentComponent,
		HeroChildComponent,
		NameParentComponent,
		NameChildComponent,
		VersionChildComponent,
		VersionParentComponent,
		VoterComponent,
		VoterParentComponent,
		CountdownTimerComponent,
		CountdownParentComponent,
		CountdownViewchildParentComponent,
		CountdownViewchildTimerComponent,
		CommponentCommunicateComponent,
		CommponentMessageComponent,
		CommponentStylesComponent,
		AfterContentParentComponent,
		AfterContentComponent,
		ChildComponent,
		AfterViewParentComponent,
		AfterViewComponent,
		ChildViewComponent,
		LoaderComponent,
		FontComponentComponent,
		routedComponents
	],
	providers: [MessageService],
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
