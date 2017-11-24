import { Component, OnInit } from '@angular/core';
// Internal imports
import { RuntimeConfigService } from '../../../services/runtime-config.service';
import { L10nService } from '../../../services/l10n.service';
import { UserService } from '../../../services/user.service';
import { PreloadGuard } from '../../../services/guards/preload.guard';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/combineAll';

@Component({
    selector: 'ulms-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public userData: any;
    public incomingFeedCount: number;
    public homeUrl: string; // TODO Value depends on User.Identity.IsAuthenticated
    public idpUrl: string;
    public contextId = null; // TODO What is this?
    public localeCodes: Array<string>;
    public localeCodesMap: { [key: string]: string };
    public currentLocale: string;
    public isMenuShow = false;

    constructor(public config: RuntimeConfigService,
                public l10nService: L10nService,
                public preloadGuard: PreloadGuard,
                private userService: UserService) {
        this.currentLocale = this.l10nService.getLocale();
        this.localeCodes = this.config.localeCodes.split(',');
        this.localeCodesMap = {};
        this.localeCodes.forEach((code) => {
            this.localeCodesMap[code] = code.substr(0, 2);
        });

        const getUser = () => {
            setTimeout(() => {
                if (this.userService.getUserData() && this.l10nService.getL10Data()) {
                    this.userData = this.userService.getUserData();
                    this.isMenuShow = true;
                    return;
                } else {
                    getUser();
                }
            }, 250);
        };
        getUser();


        /* load resources ( translate, user )
        const resourcesLoad = Observable
            .of(this.preloadGuard.loadResources())
            .combineAll().map((results: Array<boolean>) => {
                return results.filter(result => result === false).length === 0;
            });
        const resourcesLoadObservable = resourcesLoad.subscribe((menuVisible: boolean) => {
            this.isMenuShow = menuVisible;
            resourcesLoadObservable.unsubscribe();
        });

        */

    }

    ngOnInit() {
    }

    public onHidden(): void {
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
    }

}
