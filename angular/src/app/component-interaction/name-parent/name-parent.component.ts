import { Component } from '@angular/core';

@Component({
	selector: 'my-name-parent',
	templateUrl: './name-parent.component.html',
	styleUrls: ['./name-parent.component.css']
})
export class NameParentComponent {
	names = ['Mr. IQ', '', 'Bombasto', 'gabem', '10', ''];
	constructor() {}
}
