import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-name-child',
	templateUrl: './name-child.component.html',
	styleUrls: ['./name-child.component.css']
})
export class NameChildComponent {
	private _userName = '';

	@Input()
	set userName(name: string) {
		console.log('------ Set Name: ', name, ' ------');
		console.log('trim', name.trim());
		this._userName = (name && name.trim()) || '--- no name ---';
	}

	get userName(): string {
		return this._userName;
	}
}
