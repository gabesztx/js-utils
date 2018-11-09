import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

// Nexius Core imports
import { CommonRuntimeConfig } from '@nexius/core';

// internal imports
import * as fromRoot from '../../../reducers/index.reducer';


@Component({
    selector: 'nx-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    public baseURL: string;
    public version: string;
    public configData: any;
    public isLTI: boolean;
    public isFooterShow = false;
    isReady$: Observable<boolean>;

    constructor(
        private config: CommonRuntimeConfig,
        private store: Store<fromRoot.AppState>,
    ) {
        this.baseURL = this.config.baseUrl;
        this.version = 'Neptun.Net LMS - ' + this.config['systemType'] + ' ' + this.config.version;
    }

    ngOnInit() {
        this.isReady$ = this.store.select(fromRoot.getSystemReadyState);
    }

}
