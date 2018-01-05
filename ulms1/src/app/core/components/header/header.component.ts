import { Component, OnInit } from '@angular/core';
// Internal imports
import { Router } from '@angular/router';
import { UserStatus } from '../../../models/user.model';
import { RuntimeConfigService } from '../../../services/runtime-config.service';
import { L10nService } from '../../../services/l10n.service';
import { UserService } from '../../../services/user.service';
import { PreloadGuard } from '../../../services/guards/preload.guard';
import { CourseDetailService } from '../../../services/course-detail.service';
import { PreferencesService } from '../../../services/preferences.service';
import { fadeInKeyFrameAnimation } from '../../../animations/common-animation';

@Component({
    selector: 'ulms-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [fadeInKeyFrameAnimation]
})
export class HeaderComponent implements OnInit {

    public userData: any;
    public configData: any;
    public currentLocale: string;
    public localeCodesMap = [];
    public localeCodes: Array<string>;
    public isMenuShow = false;
    public isLTI = false;
    public notification: any;
    public LTIData: any;
    public LTIButtonLabel: string;
    public isUserAdmin = false;

    constructor(private config: RuntimeConfigService,
                private router: Router,
                private l10nService: L10nService,
                private courseDetailService: CourseDetailService,
                private preferencesService: PreferencesService,
                private preloadGuard: PreloadGuard,
                private userService: UserService) {
        this.preferencesService.__headerInstance__ = this;
        this.preloadGuard.__headerInstance__ = this;

        this.configData = this.config;
        this.currentLocale = this.l10nService.getLocale();
        this.localeCodes = this.config.localeCodes.split(',');
        //
        this.localeCodes.forEach((code) => {
            this.localeCodesMap.push(code.substr(0, 2).toUpperCase());
        });
    }

    ngOnInit() {}

    navigationUrl() {
        this.router.navigate(['courses', 'feed']);
    }

    setNotification(notificationData: any) {
        this.notification = notificationData;
    }

    getLTIData() {
        console.log('- getLTIData -');
        setTimeout(() => {
            if (this.courseDetailService.getLTIListData()) {
                this.LTIData = this.courseDetailService.getLTIListData();
                this.LTIButtonLabel = this.LTIData.returnLabel ? this.LTIData.returnLabel : this.l10nService.translate('btn_lti_back_to_course');
                return;
            } else {
                this.getLTIData();
            }
        }, 250);
    }

    setUserData(userData: any) {
        this.userData = userData;
        this.isUserAdmin = this.userData.role === UserStatus.SysAdmin;
        this.isMenuShow = true;
        this.isLTI = !!this.userData.contextLogin;
        if (this.isLTI) {
            this.getLTIData();
        }

    }

}
