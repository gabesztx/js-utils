import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'ulms-status-text',
    templateUrl: './status-text.component.html',
    styleUrls: ['./status-text.component.scss']
})
export class StatusTextComponent implements OnInit {
    @Input() labelText: string;
    @Input() value: string;
    @Input() className: string;
    @Input() toolTipData: string;

    ngOnInit() {
    }

}
