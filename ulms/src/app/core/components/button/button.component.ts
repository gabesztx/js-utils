import { Component, Input, Output, OnInit, OnChanges, SimpleChange, EventEmitter } from '@angular/core';

@Component({
    selector: 'ulms-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {

    @Input() isPointer = '';
    @Input() className = '';
    @Input() btnLabel = '';
    @Input() btnIconClassName = '';
    @Output() onButtonFn = new EventEmitter<any>();

    public classNameButton: string;

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        this.classNameButton = this.isPointer + ' ' + this.className;
    }

    ngOnInit() {}

    btnClick() {
        if (this.onButtonFn.observers.length) {
            this.onButtonFn.emit();
        }
    }
}
