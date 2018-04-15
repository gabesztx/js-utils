import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CountdownViewchildTimerComponent } from '../countdown-viewchild-timer/countdown-viewchild-timer.component';

@Component({
	selector: 'my-countdown-viewchild-parent',
	templateUrl: './countdown-viewchild-parent.component.html',
	styleUrls: ['./countdown-viewchild-parent.component.css']
})
export class CountdownViewchildParentComponent implements AfterViewInit {
	@ViewChild(CountdownViewchildTimerComponent)
	private timerComponent: CountdownViewchildTimerComponent;

	ngAfterViewInit() {
		console.log('ngAfterViewInit');
		setTimeout(() => {
			return this.seconds = () => {
				return this.timerComponent.seconds;
			};
		});
	}

	seconds() {
		return 0;
	}


	start() {
		this.timerComponent.start();
	}

	stop() {
		this.timerComponent.stop();
	}

}
