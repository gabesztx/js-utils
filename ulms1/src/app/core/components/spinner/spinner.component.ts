import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {SpinnerService} from '../../../services/spinner.service';

@Component({
    selector: 'ulms-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnChanges {
    @Input() className: string;
    public instance = {};

    constructor(private spinnerService: SpinnerService) {
        // console.log('SpinnerComponent');
    }

    ngOnChanges() {
        this.instance[this.className] = this;
    }

    ngOnInit() {
    }

    showSpinner() {
        console.log('showSpinner');
    }

    hideSpinner() {
        console.log('hideSpinner');
    }
}
