import { Component } from '@angular/core';
import { MessageService } from '../../service/index';

@Component({
	selector: 'my-commponent-communicate',
	templateUrl: './commponent-communicate.component.html',
	styleUrls: ['./commponent-communicate.component.css']
})
export class CommponentCommunicateComponent {

	constructor(private messageService: MessageService) {}

	sendMessage(): void {
		this.messageService.sendMessage('Message from Home Component to App Component!');
	}

	clearMessage(): void {
		this.messageService.clearMessage();
	}

}
