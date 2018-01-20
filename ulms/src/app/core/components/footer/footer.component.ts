import {Component, OnInit} from '@angular/core';
import {RuntimeConfigService} from '../../../services/runtime-config.service';
import {L10nService} from '../../../services/l10n.service';
import {PreloadGuard} from '../../../services/guards/preload.guard';
import {fadeInKeyFrameAnimation} from '../../../animations/common-animation';

@Component({
    selector: 'ulms-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    animations: [fadeInKeyFrameAnimation]
})

export class FooterComponent implements OnInit {
    public baseURL: string;
    public version: string;
    public userData: any;
    public configData: any;
    public isLTI: boolean;
    public isFooterShow = false;

    constructor(private config: RuntimeConfigService,
                private l10nService: L10nService,
                private preloadGuard: PreloadGuard) {
        this.preloadGuard.__footerInstance__ = this;
        this.configData = this.config;
        this.baseURL = this.configData.baseUrl;
        this.version = 'Neptun.Net LMS - ' + this.config.version;
    }

    ngOnInit() {}

    setUserData(userData: any) {
        this.userData = userData;
        this.isLTI = this.userData.contextLogin;
        this.isFooterShow = !this.isLTI;
    }
}
