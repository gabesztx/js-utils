import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './page2.component.html',
	styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

	constructor(router: Router, activeRiuter: ActivatedRoute) {
		// console.log('Router: ', router);
		// console.log('ActivatedRoute: ', activeRiuter);
	}

	ngOnInit() {
		console.log('Page2 Menu');
	}
}
