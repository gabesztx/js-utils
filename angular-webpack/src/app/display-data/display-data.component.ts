import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'my-app-display-data',
	templateUrl: './display-data.component.html',
	styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {
	name: string;
	users: any;
	@Input('display') display: string;

	constructor() {
		this.name = 'Gabesz';
		this.users = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
	}

	ngOnInit() {}

}
