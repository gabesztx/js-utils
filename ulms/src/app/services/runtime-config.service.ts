import { Injectable } from '@angular/core';

const lmsConfiguration: Object = (<any>window).lmsConfiguration || {};
let __instance__ = null;


@Injectable()
export class RuntimeConfigService {

    baseUrl: string;

    // current site original base url, with protocol and 'api/'
    baseApiUrl: string;

    // idp server base url
    idpBaseUrl: string;

    // player base url
    playerBaseUrl: string;

    // idp api base url
    idpApiBaseUrl: string;

    // idp api user token url
    idpApiTokenUrl: string;

    // idp api retry count
    idpApiRetryCount: string;

    // default page size
    defaultPageSize: string;

    // course listing page
    urlCourseList: string;

    // course detail page
    urlCourseDetailPage: string;

    // course registration url
    urlApiCourseRegister: string;

    // feed url
    urlApiFeed: string;

    // logut url
    logoutUrl: string;

    // player application id
    playerAppId: string;

    // application version number
    version: string;

    // application version number stamp
    versionStamp: string;

    // application supported l10n codes
    localeCodes: string;

    // application default l10n code
    defaultLocaleCode: string;

    // admin resources locataion
    adminResourcesPath: string;

    constructor() {
        if (!__instance__) {
            // const ENV = (<any>window).env;
            // console.log('ENV', ENV);

            Object.assign(this, lmsConfiguration); // TODO
            __instance__ = this;
        }

        return __instance__;
    }

}
