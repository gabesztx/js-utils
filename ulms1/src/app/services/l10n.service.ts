// External imports
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/catch';
// Internal imports
import { HttpBase } from './base/http.class';
import { RuntimeConfigService } from './runtime-config.service';

declare const document: any;

let __instance__: L10nService;

@Injectable()
export class L10nService extends HttpBase {

    private locale: string;
    private localeCodes: Array<string>;
    private dictionary: any;
    private defaultScope: string;

    constructor(
        private http: Http,
        private config: RuntimeConfigService
    ) {
        super();

        if (!__instance__) {
            const cookieLocale = this.getCookie('locale');
            this.localeCodes = config.localeCodes ? config.localeCodes.split(',') : [];

            if (this.localeCodes.indexOf(cookieLocale) === -1) {
                this.locale = 'hu-HU';
            } else {
                this.locale = cookieLocale;
            }

            __instance__ = this;
        }

        return __instance__;
    }

    init(): Observable<boolean> {
        const urlPath = (<any>window).env === 'serv' ? 'content/client/assets/locales/' : 'assets/locales/';
        const url = this.config.baseUrl + urlPath + this.locale + '.json';
        this.defaultScope = this.locale;
        return this.loadLocalizationResources(url, this.defaultScope);
    }

    translate(key: string, params?: any): string {
        const translation = this.getTranslation(key, this.defaultScope, params);
        return translation || key;
    }

    getLocale(): string {
        return this.locale;
    }

    protected handleError(error: Response | any): Observable<boolean> {
        return super.handleError(error).catch((message) => {
            console.error(message);
            return Observable.of(false);
        });
    }

    private loadLocalizationResources(url: string, scope: string, opts?: RequestOptions): Observable<boolean> {
        const options = this.createRequestOptions(opts);

        if (this.dictionary) {
            return Observable.of(true);
        } else {
            return this.http.get(url, options)
                // NOTE We need to switch from an Observable<Result> to an Observable<boolean>
                .switchMap((res: Response) => {
                    return this.extract(res, scope);
                })
                .retryWhen(this.handleSessionTimeout.bind(this))
                .catch(this.handleError.bind(this));
        }
    }

    private getTranslation(key: string, scope: string, params?: any): string | null {
        if (typeof key !== 'string' || !key.length || typeof scope !== 'string' || !scope.length) {
            console.error('L10nService.getTranslation ERROR: localization key and scope are mandatory! [key, scope]:', key, scope);
            return null;
        }

        if (!this.dictionary[scope][key]) {

        } else {
            let i = 1;
            let ret = this.dictionary[scope][key];

            if (params) {
                for (const k in params) {
                    if (params.hasOwnProperty(k)) {
                        if (ret.indexOf('{{' + i + '}}') >= 0) {
                            ret = ret.replace('{{' + i + '}}', params[k]);
                        } else if (ret.indexOf('{{' + k + '}}') >= 0) {
                            ret = ret.replace('{{' + k + '}}', params[k]);
                        } else {
                            console.log('nxLocale::getKey: no match found for \'{{' + i + '}}\' or \'{{' + k +
                                '}}\' in localization string \'' + ret + '\'');
                        }

                        i++;
                    }
                }
            }

            return ret;
        }
    }

    private getCookie(name: string): string | null {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];

            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }

            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }

        return null;
    }

    private extract(res: Response, scope: string) {
        try {
            this.createDictionary(scope);
            this.dictionary[scope] = res.json();
            return Observable.of(true);
        } catch (err) {
            return Observable.throw(res);
        }
    }

    private createDictionary(scope?: string) {
        if (!this.dictionary) {
            this.dictionary = {};
        }

        if (scope && !this.dictionary[scope]) {
            this.dictionary[scope] = {};
        }
    }

}
