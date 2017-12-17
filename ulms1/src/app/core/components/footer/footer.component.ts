import { Component, OnInit } from '@angular/core';
import { RuntimeConfigService } from '../../../services/runtime-config.service';
import { UserService } from '../../../services/user.service';
import { L10nService } from '../../../services/l10n.service';
import {PreloadGuard} from '../../../services/guards/preload.guard';
import {UserStatus} from '../../../models/user.model';

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
                private preloadGuard: PreloadGuard,
                private userService: UserService) {
        this.preloadGuard.__footerInstance__ = this;
        this.baseURL = this.config.baseUrl;
        this.version = 'Neptun.Net LMS - ' + this.config.version;
    }

    ngOnInit() {}


    setUserData(userData: any) {
        this.userData = userData;
        this.isLTI = this.userData.contextLogin;
        this.isFooterShow = !this.isLTI;
    }
}
