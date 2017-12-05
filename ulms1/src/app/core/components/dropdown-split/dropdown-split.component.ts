import {Component, Input, Output, EventEmitter, OnDestroy, OnInit, OnChanges} from '@angular/core';
import {slideInOutAnimation, slideInOutKeyFrameAnimation} from '../../../animations/course-animation';


@Component({
    selector: 'ulms-dropdown-split',
    templateUrl: './dropdown-split.component.html',
    styleUrls: ['./dropdown-split.component.scss'],
    animations: [slideInOutAnimation, slideInOutKeyFrameAnimation]
})
export class DropdownSplitComponent implements OnInit, OnDestroy, OnChanges {

    @Input() groupName: string;
    @Input() labelText: string;
    @Input() urlId: string;
    @Input() itemData: any;
    @Input() dropDownLabel: any;
    @Output() onButtonFn = new EventEmitter<any>();
    @Output() dropDownClick = new EventEmitter<any>();

    public isShow = false;
    public isOpen = false;
    public _closeDropDown: any;
    public openTime: any;
    public closeTime: any;

    public tabLaunch: any;
    public tabDropDown = [];
    public isActiveDropDown = true;

    constructor() {
        this._closeDropDown = this.closeDropDown.bind(this);
    }

    ngOnChanges() {
        if (this.groupName === 'navTabLinks') {
            this.itemData.forEach((item) => {
                if (item.rel === 'ContractAll' || item.rel === 'CertificateAll' || item.rel === 'LicenseDocumentAll' || item.rel === 'External') {
                    this.tabLaunch = item;
                } else {
                    this.tabDropDown.push(item);
                }
            });
        } else {
            this.itemData.forEach((item) => {
                if (item.rel === 'ContractReject' || item.rel === 'ProfileUpgrade') {
                    this.isActiveDropDown = false;
                }
            });
        }
    }

    ngOnInit() {
    }

    btnClick() {
        if (this.onButtonFn.observers.length) {
            this.onButtonFn.emit();
        }
    }

    dropDownClickFn(linkData: any) {
        if (this.dropDownClick.observers.length) {
            this.dropDownClick.emit(linkData);
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
