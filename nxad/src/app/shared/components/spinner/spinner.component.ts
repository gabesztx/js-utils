import {Component, Input, OnInit, OnChanges} from '@angular/core';
// import {SpinnerService} from '../../../services/spinner.service';

@Component({
    selector: 'nx-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnChanges {
    @Input() className: string;
    constructor() {}
    ngOnChanges() {}
    ngOnInit() {}
    showSpinner() {}
    hideSpinner() {}
}
