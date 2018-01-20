import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'ulms-according-menu',
    templateUrl: './according-menu.component.html',
    styleUrls: ['./according-menu.component.scss']
})
export class AccordingMenuComponent implements OnInit {
    @Input() labelText: string;
    @Input() description: string;
    constructor() {}
    ngOnInit() {}
}
