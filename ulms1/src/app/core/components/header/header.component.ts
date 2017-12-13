import { Component, OnInit } from '@angular/core';
// Internal imports
import { Router } from '@angular/router';
import { RuntimeConfigService } from '../../../services/runtime-config.service';
import { L10nService } from '../../../services/l10n.service';
import { UserService } from '../../../services/user.service';
import { UserStatus } from '../../../models/user.model';

@Component({
    selector: 'ulms-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    // public incomingFeedCount: number;
    // public homeUrl: string; // TODO Value depends on User.Identity.IsAuthenticated
    // public idpUrl: string;
    // public contextId = null; // TODO What is this?
    // public localeCodesMap: { [key: string]: string };

    public userData: any;
    public configData: any;
    public currentLocale: string;
    public localeCodesMap = {};
    public localeCodes: Array<string>;
    public isMenuShow = false;
    public isUserAdmin = false;

    constructor(private config: RuntimeConfigService,
                private router: Router,
                private l10nService: L10nService,
                private userService: UserService) {
        this.configData = this.config;
        this.currentLocale = this.l10nService.getLocale();
        this.localeCodes = this.config.localeCodes.split(',');
        this.localeCodes.forEach((code) => {
            this.localeCodesMap[code] = code.substr(0, 2);
        });
    }

    ngOnInit() {
        this.getUser();
    }

    navigationUrl() {
        this.router.navigate(['courses', 'feed']);
    }

    getUser() {
        setTimeout(() => {
            if (this.userService.getUserData() && this.l10nService.getL10Data()) {
                this.userData = this.userService.getUserData();
                this.isUserAdmin = this.userData.role === UserStatus.SysAdmin;
                this.isMenuShow = true;
                return;
            } else {
                this.getUser();
            }
        }, 250);
    }

    /*public onHidden(): void {
        console.log('Dropdown is hidden');
    }

    public onShown(): void {
        console.log('Dropdown is shown');
    }

    public isOpenChange(): void {
        console.log('Dropdown state is changed');
    }

    public setLanguage(lang: string): void {
        console.log('Ez most szettelte a lengvidzset ' + lang + '-ra!');
    }*/

}
