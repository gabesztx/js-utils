import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'ulms-nav-tab',
    templateUrl: './nav-tab.component.html',
    styleUrls: ['./nav-tab.component.scss']
})
export class NavTabComponent implements OnInit, OnChanges {

    @Input() navData: any;
    @Input() navTabLinks = [];
    public isNavTabShow = false;

    constructor() {}

    ngOnChanges() {
        let itemNum = 0;
        this.navTabLinks.forEach((link, key) => {
            if (link.rel !== 'ContractReject' && link.rel !== 'ProfileUpgrade' && link.rel !== 'Accept' && link.rel !== 'Reject') {
                itemNum = key;
            }
        });
        this.isNavTabShow = !!itemNum;
    }
    ngOnInit() {}
}
