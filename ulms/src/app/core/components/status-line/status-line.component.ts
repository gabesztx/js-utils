import { Component, OnInit, OnDestroy, OnChanges, Input, SimpleChange } from '@angular/core';


@Component({
    selector: 'ulms-status-line',
    templateUrl: './status-line.component.html',
    styleUrls: ['./status-line.component.scss']
})

export class StatusLineComponent implements OnInit, OnDestroy, OnChanges {
    @Input() className: string;
    @Input() labelText: string;
    @Input() toolTipData: string;
    @Input() toolTipDataLabel: string;
    @Input() value: number;
    @Input() statusIcon: any;
    @Input() statusColorLine: any;
    @Input() requiredText: string;
    @Input() requiredToolTipText: string;
    numberTimeOut: any;
    numberInterval: any;

    public startValue = 0;
    public endValue;

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {

        this.numberTimeOut = setTimeout(() => {
            if (this.value) {
                this.numberInterval = setInterval(() => {
                    if (this.startValue === this.value) {
                        clearInterval(this.numberInterval);
                        return;
                    }
                    this.startValue++;
                }, 5);
            }
        }, 250);
    }

    ngOnInit() {
        // console.log('STATUS color', this.statusColorLine);
    }

    ngOnDestroy() {
        clearTimeout(this.numberTimeOut);
        clearInterval(this.numberInterval);
    }
}
