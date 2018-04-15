import { Component } from '@angular/core';

@Component({
		selector: 'my-version-parent',
		templateUrl: './version-parent.component.html',
		styleUrls: ['./version-parent.component.css']
})
export class VersionParentComponent {

		major = 1;
		minor = 23;

		newMinor() {
				this.minor++;
		}

		newMajor() {
				this.major++;
				this.minor = 0;
		}

}
