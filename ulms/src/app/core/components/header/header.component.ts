import { Component, OnInit } from '@angular/core';
// Internal imports
import { RuntimeConfigService } from '../../../services/runtime-config.service';
import { L10nService } from '../../../services/l10n.service';

@Component({
    selector: 'ulms-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public user: any;
    public incomingFeedCount: number;
    public homeUrl: string; // TODO Value depends on User.Identity.IsAuthenticated
    public idpUrl: string;
    public contextId = null; // TODO What is this?
    public localeCodes: Array<string>;
    public localeCodesMap: {[key: string]: string};
    public currentLocale: string;

    constructor(public config: RuntimeConfigService, public l10n: L10nService) {
        this.user = {
            name: 'Polgár Jenő hivatal'
        };
        this.currentLocale = this.l10n.getLocale();
        this.localeCodes = this.config.localeCodes.split(',');
        this.localeCodesMap = {};
        this.localeCodes.forEach((code) => {
            this.localeCodesMap[code] = code.substr(0, 2);
        });
    }

    ngOnInit() { }

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
