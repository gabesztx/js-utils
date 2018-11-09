// External imports
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// Nexius Core import
import { CommonRuntimeConfig } from '@nexius/core';
// Internal imports

import { UserLevel } from '../../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import * as fromRoot from '../../../reducers/index.reducer';

@Component({
    selector: 'nx-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public profileSettingsUrl: string;
    public logoutUrl: string;
    public isHunFlag: any;
    public isDeFlag: any;
    public isEnFlag: any;
    public baseUrl: any;
    public hasPermission: boolean;
    public isTest: boolean;
    public hasAdminPermission: boolean;
    isReady$: Observable<boolean>;
    user$: Observable<any>;

    constructor(
        public commonRuntimeConfig: CommonRuntimeConfig,
        private store: Store<fromRoot.AppState>,
        private cookieService: CookieService,
        private auth: AuthService) {

        this.isHunFlag = this.cookieService.get('locale') === 'hu-HU'; // 0
        this.isEnFlag = this.cookieService.get('locale') === 'en-US'; // 1
        this.isDeFlag = this.cookieService.get('locale') === 'de-DE'; // 2
    }

    ngOnInit() {
        const base = this;

        const appEnvironment = this.commonRuntimeConfig['systemType'];
        this.hasPermission = false;
        this.hasAdminPermission = false;
        this.baseUrl = this.commonRuntimeConfig.baseUrl;
        this.profileSettingsUrl = this.commonRuntimeConfig.idpBaseUrl + 'profile/index';
        this.logoutUrl = this.commonRuntimeConfig.logoutUrl;
        this.isReady$ = this.store.select(fromRoot.getSystemReadyState);
        this.user$ = this.store.select(fromRoot.CoreSelectors.getCurrentUser);

        this.isReady$.subscribe(function(isReady) {
            // Check permission
            if ( isReady ) {
                base.hasPermission = base.auth.isInRole(UserLevel.Administrator)
                    || (base.auth.isInRole(UserLevel.SysSupport, false)
                    || base.auth.isInRole(UserLevel.SysAdmin, false));
                base.hasAdminPermission = base.auth.isOrganizationAdmin()
                || (base.auth.isInRole(UserLevel.SysSupport, false)
                || base.auth.isInRole(UserLevel.SysAdmin, false));
            }
        });

        if (appEnvironment === 'test') {
            this.isTest = true;
        }


    }
}
