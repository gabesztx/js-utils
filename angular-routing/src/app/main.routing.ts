import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1Component } from './routing/page1/page1.component';
import { Page2Component } from './routing/page2/page2.component';
import { Page3Component } from './routing/page3/page3.component';
import { Page3_1Component } from './routing/page3_1/page3_1.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { RouteLoadQuad } from './services/route-load-quad';
import { UserLoadData } from './services/user-load-data';
import { RouteCanLoad } from './services/route-can-load';
import { RouterConfig } from './router.config';


@NgModule({
	imports: [
		RouterModule.forRoot(RouterConfig)
		// RouterModule.forChild(routes)
	],
	declarations: [
		Page1Component,
		Page2Component,
		Page3Component,
		Page3_1Component,
		PageNotFoundComponent,
		// routedComponents
	],
	providers: [
		RouteLoadQuad,
		RouteCanLoad,
		UserLoadData
	],
	exports: [RouterModule]
})

export class AppRoutingModule {
}
