import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { slideInOutAnimation, slideInOutKeyFrameAnimation } from '../../../animations/course-animation';


@Component({
    selector: 'ulms-dropdown-split',
    templateUrl: './dropdown-split.component.html',
    styleUrls: ['./dropdown-split.component.scss'],
    animations: [slideInOutAnimation, slideInOutKeyFrameAnimation]
})
export class DropdownSplitComponent implements OnInit, OnDestroy {
    @Input() groupName: string;
    @Input() labelText: string;
    @Input() urlId: string;
    @Input() itemData: any;
    @Input() dropDownLabel: any;
    @Output() onButtonFn = new EventEmitter<any>();

    public isShow = false;
    public isOpen = false;
    public _closeDropDown: any;
    public openTime: any;
    public closeTime: any;

    constructor() {
        this._closeDropDown = this.closeDropDown.bind(this);
    }

    ngOnInit() {}

    btnClick() {
        if (this.onButtonFn.observers.length) {
            this.onButtonFn.emit();
        }
    }

    closeDropDown() {
        if (!this.isOpen) {
            clearTimeout(this.openTime);
            this.isShow = true;
            this.openTime = setTimeout(() => {
                this.isOpen = true;
            }, 50);
        } else {
            clearTimeout(this.closeTime);
            this.isOpen = false;
            this.closeTime = setTimeout(() => {
                this.isShow = false;
            }, 100);
            document.removeEventListener('click', this._closeDropDown, false);
        }
    }

    openDropDown() {
        document.addEventListener('click', this._closeDropDown, false);
    }

    ngOnDestroy() {
        document.removeEventListener('click', this._closeDropDown, false);
    }
}
