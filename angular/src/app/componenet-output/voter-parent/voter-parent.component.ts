import {Component} from '@angular/core';

@Component({
    selector: 'my-voter-parent',
    templateUrl: './voter-parent.component.html',
    styleUrls: ['./voter-parent.component.css']
})
export class VoterParentComponent {
    agreed = 0;
    disagreed = 0;
    voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
    onVoted(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
        console.log('agreed', this.agreed);
        console.log('disagreed', this.disagreed);
    }
}
