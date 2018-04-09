import { Component } from '@angular/core';
import '../style/app.scss';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title: string;
	componentParam: string;

	constructor() {
		this.componentParam = 'Component String Params';
		this.title = 'App Init';
	}

}
