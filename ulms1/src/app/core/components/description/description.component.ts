import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ulms-description',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
    @Input() className;
    @Input() description: any;

    public isOpen = false;
    textToggle() {
        this.isOpen = !this.isOpen;
    }
}
