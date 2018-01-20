import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpProxy } from './base/http-proxy.class';
import { RuntimeConfigService } from './runtime-config.service';
import { Observable } from 'rxjs/Observable';
import { PreferencesApiKey } from '../models/user.model';
import { CommonService } from './common/common.service';
import 'rxjs/add/observable/of';
import 'rxjs/operator/delay';

let __instance__: PreferencesService = null;

@Injectable()

export class PreferencesService extends HttpProxy {
    public apiUrl: any;
    public __headerInstance__: any;
    public __courseListContentInstance__: any;
    public preferencesData = {
        user: {
            [PreferencesApiKey.api_InvitedCourses]: { dateState: 0 },
            [PreferencesApiKey.api_UserOptionalCourseList]: { dateState: 0 },
            [PreferencesApiKey.api_CourseFeeds]: { dateState: 0 },
            [PreferencesApiKey.api_UserFeeds]: { dateState: 0 },
        }
    };
    public preferencesPostData: any;

    constructor(protected http: Http, private config: RuntimeConfigService, private commonService: CommonService) {
        super();
        if (__instance__ !== this) {
            this.apiUrl = `${this.config.baseApiUrl}preferences`;
            __instance__ = this;
        }
        return __instance__;
    }

    getPreferences(): Observable<boolean> | any {
        return this.get(`${this.apiUrl}`)
            .map((result: any) => {
                this.preferencesPostData = JSON.parse(result);
                this.preferencesData = JSON.parse(result);
                return this.preferencesData;
            });
    }

    postPreferencesData(apikey: string) {
        const newDateState = this.getPreferencesData(apikey);
        if (newDateState && newDateState.length) {
            console.log('postPreferencesData POST');
            this.preferencesPostData.user[apikey].dateState = newDateState[0];
            this.post(this.apiUrl, this.preferencesPostData)
                .map(value => value)
                .subscribe(
                    (result) => {
                        console.log('postPreferencesData POST Success', result);
                        if (apikey === (PreferencesApiKey.api_InvitedCourses || PreferencesApiKey.api_UserOptionalCourseList)) {
                            this.__courseListContentInstance__.updateNotification(apikey);
                        } else if (apikey === PreferencesApiKey.api_UserFeeds) {
                            this.__headerInstance__.setNotification([]);
                        }
                    },
                    (error) => error
                );
        }
    }

    getPreferencesData(apiKey?): any {
        return this.preferencesData.user[apiKey].notification;
    }

    setCurrentPreference(apikey: string, items: any) {
        if (this.preferencesData && (items && items.length > 0)) {
            let keyIndex;
            const dateList = [];
            const newDateList = [];
            const currentPreferenceData = this.preferencesData.user[apikey];
            const currentPreferenceLastDate = currentPreferenceData.dateState;

            items.forEach((item, key) => {
                let date;
                if (apikey === (PreferencesApiKey.api_UserFeeds)) {
                    date = this.commonService.dateValue(item.creationDate);
                    dateList.push(date);
                }
                if (apikey === (PreferencesApiKey.api_InvitedCourses)) {
                    date = this.commonService.dateValue(item.creationDate);
                    dateList.push(date);
                }
                if (apikey === PreferencesApiKey.api_UserOptionalCourseList) {
                    date = this.commonService.dateValue(item.course.createdAt);
                    dateList.push(date);
                }

                if (date <= currentPreferenceLastDate) {
                    newDateList.push(key);
                }
            });

            keyIndex = newDateList[0];

            if (newDateList.length === 0 && dateList.length === 1 && dateList[0] > currentPreferenceLastDate) {
                keyIndex = 1;
            }

            if (apikey === (PreferencesApiKey.api_UserFeeds) && dateList.length > 0) {
                this.__headerInstance__.setNotification(dateList.slice(0, keyIndex));
            }
            currentPreferenceData.notification = dateList.slice(0, keyIndex);
        }
    }
}
