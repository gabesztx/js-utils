import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title: string;
	componentParam: string;
	constructor() {
		this.title = 'Ez egdddddy 122ss222';
	}
}