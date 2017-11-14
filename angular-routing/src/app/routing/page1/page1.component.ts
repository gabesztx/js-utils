import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './page1.component.html',
	styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
	routerData: string;
	router: Router;

	constructor(router: Router, activeRiuter: ActivatedRoute) {
		// console.log('Router: ', router);
		// console.log('ActivatedRoute: ', activeRiuter);
		this.routerData = activeRiuter.snapshot.data.titleData;
		this.router = router;
	}

	ngOnInit() {
		console.log('Page1 Menu');
		/*setTimeout(() => {
			console.log('GO');
			this.router.navigate(['/page3']);
		}, 3000)*/
	}
}
