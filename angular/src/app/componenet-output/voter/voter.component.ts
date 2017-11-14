import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'my-voter',
    templateUrl: './voter.component.html',
    styleUrls: ['./voter.component.css']
})
export class VoterComponent {

    @Input() name: string;
    @Output() onVoted = new EventEmitter<boolean>();
    voted = false;

    vote(agreed: boolean) {
        this.onVoted.emit(agreed);
        this.voted = true;
    }

}
