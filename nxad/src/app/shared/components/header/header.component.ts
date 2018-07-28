import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { CommonRuntimeConfig } from '@nexius/core';

import * as fromRoot from '../../../reducers/index.reducer';

@Component({
    selector: 'nx-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public profileSettingsUrl: string;
    public logoutUrl: string;
    user$: Observable<any>;
    public isUserAdmin = true;
    public isHunFlag: any;
    public isDeFlag: any;
    public isEnFlag: any;
    public isReady$: Observable<boolean>;

    constructor(
        public commonRuntimeConfig: CommonRuntimeConfig,
        private store: Store<fromRoot.AppState>,
        private cookieService: CookieService) {

        this.isHunFlag = this.cookieService.get('locale') === 'hu-HU'; // 0
        this.isEnFlag = this.cookieService.get('locale') === 'en-US'; // 1
        this.isDeFlag = this.cookieService.get('locale') === 'de-DE'; // 2
    }

    ngOnInit() {
        this.profileSettingsUrl = this.commonRuntimeConfig.idpBaseUrl + 'profile/index';
        this.logoutUrl = this.commonRuntimeConfig.logoutUrl;
        this.isReady$ = this.store.select(fromRoot.getSystemReadyState);
        this.user$ = this.store.select(fromRoot.CoreSelectors.getCurrentUser);
    }
}
