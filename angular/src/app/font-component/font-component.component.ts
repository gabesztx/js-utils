import { Component, OnInit, } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'my-form',
	templateUrl: './font-component.component.html',
	styleUrls: ['./font-component.component.scss']
})
export class FontComponentComponent implements OnInit {
	submitted = false;
	modelJson: any;
	model = {
		name: '',
		email: '',
		message: ''
	};
	// powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
	// model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

	constructor() {

	}

	ngOnInit() {
		console.log('HELLO FORM');
		// const myHero = new Hero(10, 'Name', 'Port');
	}


	onModelChange(value: any) {
		// console.log('onModelChange', this.model);
		this.modelJson = JSON.stringify(this.model);
	}

	changeInputValue() {
		// console.log('changeInputValue', this.model);
	}

	onSubmit(form: any) {
		console.log('SUBMIT');
		console.log(form);
		// this.submitted = true;
	}
}
