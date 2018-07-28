import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'nx-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
    @Input() titleKey: string;
    @Input() helpLabelKey = 'lbl_help';
    @Input() helpTextKey: string;

    constructor() {
    }


    ngOnInit() {
    }

}
