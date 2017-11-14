import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'ulms-nav-tab',
    templateUrl: './nav-tab.component.html',
    styleUrls: ['./nav-tab.component.scss']
})
export class NavTabComponent implements OnInit {
    @Input() navData: any;

    constructor(private router: Router) {

    }

    ngOnInit() {}

    navigateUrl(labelData: any) {
        const urlPathName = labelData.urlPath;
        this.router.navigate(['/app/courses/list/' + urlPathName]);
    }

    isActive(labelData: any) {
        return true;
        // const urlPathName = [labelData.urlPath];
        // console.log('urlPathName Class', urlPathName);
    }
}
