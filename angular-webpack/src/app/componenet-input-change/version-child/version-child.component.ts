import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
	selector: 'my-version-child',
	templateUrl: './version-child.component.html',
	styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnChanges {
	@Input() major: number;
	@Input() minor: number;
	changeLog: string[] = [];

	ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
		let log: string[] = [];
		for (let propName in changes) {
			// console.log('object key: ', propName);
			// console.log('changes data: ', changes);
			let changedProp = changes[propName];
			let to = JSON.stringify(changedProp.currentValue);
			if (changedProp.isFirstChange()) {
				// log.push(`Initial value of ${propName} set to ${to}`);
			} else {
				let from = JSON.stringify(changedProp.previousValue);
				log.push(`${propName} changed from ${from} to ${to}`);
			}
		}
		this.changeLog.push(log.join(', '));
	}

}
