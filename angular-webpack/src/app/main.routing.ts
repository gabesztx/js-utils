import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReflectiveInjector } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Page1Component } from './routing/page1/page1.component';
import { Page2Component } from './routing/page2/page2.component';
import { Page3Component } from './routing/page3/page3.component';


const routes: Routes = [
	{path: 'page1', component: Page1Component},
	{path: 'page2', component: Page2Component},
	{path: 'page3', component: Page3Component},
	// {path: '', redirectTo: 'page2'},
	{path: '**', redirectTo: 'page1'}


];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routedComponents = [Page1Component, Page2Component, Page3Component];


// // External imports
//
// import { RouterModule, Routes } from '@angular/router';
// // Internal imports
//
//
// import { Page1Component } from './routing/page1/page1.component';
// import { Page2Component } from './routing/page2/page2.component';
// import { Page3Component } from './routing/page3/page3.component';
// import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
//
// export const routes: Routes = [
// 	{path: 'page1', component: Page1Component},
// 	{path: 'page2', component: Page2Component},
// 	// {path: 'page2/:id', component: Page2Component},
// 	// {
// 	// 	path: 'page3', component: Page3Component,
// 	// 	data: {title: 'Heroes List'}
// 	// },
// 	// {
// 	// 	path: '',
// 	// 	redirectTo: '/page3',
// 	// 	pathMatch: 'full'
// 	// },
// 	// {path: '**', component: PageNotFoundComponent}
// ];
//
// //
// // export const routes: Routes = [{
// //     // This is the application root route. All application feature areas should be children of this route so that all
// //     // necessary guards properly activate before loading any feature area.
// //     path: 'app',
// //     canActivate: [PreloadGuard], // To defer loading feature areas while resources load.
// //     children: [{
// //         path: 'contents',
// //         loadChildren: 'app/views/contents/contents.module#ContentsModule'
// //     }]
// // }, {
// //     path: '',
// //     canActivate: [PreloadGuard], // To defer loading feature areas while resources load.
// //     redirectTo: '/app/contents/list',
// //     pathMatch: 'full'
// // }, {
// //     path: '**',
// //     redirectTo: '/app/contents/list',
// //     pathMatch: 'full'
// // }];
