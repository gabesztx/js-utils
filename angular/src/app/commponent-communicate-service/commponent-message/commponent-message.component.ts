import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../../service/index';
@Component({
	selector: 'my-commponent-message',
	templateUrl: './commponent-message.component.html',
	styleUrls: ['./commponent-message.component.css']
})
export class CommponentMessageComponent implements OnDestroy {
	message: any;
	subscription: Subscription;

	constructor(private messageService: MessageService) {
		// subscribe to home component messages
		this.subscription = this.messageService.getMessage()
			.subscribe(message => {
				console.log('Message', message);
				this.message = message ? message.text : '';
			});
	}

	ngOnDestroy() {
	}

}
