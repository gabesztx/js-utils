import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ulms-nav-tab',
    templateUrl: './nav-tab.component.html',
    styleUrls: ['./nav-tab.component.scss']
})
export class NavTabComponent implements OnInit, OnChanges {

    @Input() navData: any;
    @Input() navTabLinks = [];
    public isNavTabShow = false;

    constructor(private router: Router) {
    }

    ngOnChanges() {
        this.isNavTabShow = this.navTabLinks.length > 0;
        // console.log('this.isNavTabShow', this.isNavTabShow);
        // console.log('this.navTabLinks', this.navTabLinks);
    }

    ngOnInit() {
    }
}
