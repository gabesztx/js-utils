// External imports
import { Injectable } from '@angular/core';
// Nexius Core imports
// import { CommonRuntimeConfig } from '@nexius/core';
// Internal imports
import { SharedModule } from '../shared.module';

declare const window: any;

let __instance__ = null;

@Injectable()
export class RuntimeConfigurationService {

    baseUrl: string;
    baseApiUrl: string;
    idpBaseUrl: string;
    idpApiBaseUrl: string;
    idpApiTokenUrl: string;
    idpApiRetryCount: string;
    defaultPageSize: string;
    logoutUrl: string;
    version: string;
    versionStamp: string;
    localeCodes: string;
    defaultLocaleCode: string;

    constructor() {
        if (!__instance__) {
            const configObject = window['lmsConfiguration'] || {};
            Object.assign(this, configObject);
            __instance__ = this;
        }

        return __instance__;
    }

    getClientVersion(): string {
        return this.version;
    }

}
