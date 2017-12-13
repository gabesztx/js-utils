import { Component, OnInit } from '@angular/core';
import { RuntimeConfigService } from '../../../services/runtime-config.service';
import { UserService } from '../../../services/user.service';
import { L10nService } from '../../../services/l10n.service';

@Component({
    selector: 'ulms-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
    public baseURL: string;
    public version: string;
    public userData: any;
    public isLTI: boolean;
    public isFooterShow = false;

    constructor(private config: RuntimeConfigService,
                private l10nService: L10nService,
                private userService: UserService) {
        // console.log(this.config);
        this.baseURL = this.config.baseUrl;
        this.version = 'Neptun.Net LMS - ' + this.config.version;
    }

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        setTimeout(() => {
            if (this.userService.getUserData() && this.l10nService.getL10Data()) {
                this.userData = this.userService.getUserData();
                this.isLTI = this.userData.contextLogin;
                this.isFooterShow = !this.isLTI;
                return;
            } else {
                this.getUser();
            }
        }, 250);
    }
}
