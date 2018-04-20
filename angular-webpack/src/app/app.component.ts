import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	// styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title: string;
	constructor() {
		this.title = 'E7wdddfff';
		setTimeout(() => {
			console.log('Go');
		},3000)
	}
}