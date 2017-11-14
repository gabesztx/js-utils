import { Routes } from '@angular/router';

import { Page1Component } from './routing/page1/page1.component';
import { Page2Component } from './routing/page2/page2.component';
import { Page3Component } from './routing/page3/page3.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { Page3_1Component } from './routing/page3_1/page3_1.component';

import { RouteLoadQuad } from './services/route-load-quad';
import { UserLoadData } from './services/user-load-data';
import { RouteCanLoad } from './services/route-can-load';

const startRoute = {
	path: '',
	redirectTo: '/page1',
	pathMatch: 'full'
};

const fallbackRoute = {
	path: '**',
	component: PageNotFoundComponent
};


export const RouterConfig: Routes = [
	{
		path: 'page1',
		component: Page1Component,
		data: {titleData: 'Data title: Page1'}
	},
	{
		path: 'page2',
		component: Page2Component,
		// canActivate: [RouteLoadQuad], // waiting for resolve or true
		// canLoad: [RouteCanLoad],
		resolve: {
			userData: UserLoadData // resolve done then next canActivate
		},
	},
	{
		path: 'page3',
		children: [
			{
				path: '',
				component: Page3Component,
			},
			{
				path: ':id',
				component: Page3_1Component,
			},
		]
	},
	startRoute,
	fallbackRoute
];
