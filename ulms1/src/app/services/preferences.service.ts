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
    public preferencesData = {
        user: {
            [PreferencesApiKey.api_InvitedCourses]: {dateState: 0},
            [PreferencesApiKey.api_UserOptionalCourseList]: {dateState: 0},
            [PreferencesApiKey.api_CourseFeeds]: {dateState: 0},
            [PreferencesApiKey.api_UserFeeds]: {dateState: 0},
        }
    };

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
                this.preferencesData = JSON.parse(result);
                // console.log('this.preferencesData', this.preferencesData)
                return this.preferencesData;
            });
    }

    getPreferencesData(apiKey?): any {
        return this.preferencesData.user[apiKey].notification;
    }

    postPreferencesData(apikey: string) {
        console.log('postPreferencesData')
        console.log(this.preferencesData)
    }

    setCurrentPreference(apikey: string, items: any) {
        // console.log(this.preferencesData)
        if (this.preferencesData && (items && items.length > 0)) {
            const dateList = [];
            let keyIndex;
            const newDateList = [];
            const currentPreferenceData = this.preferencesData.user[apikey];
            const currentPreferenceLastDate = currentPreferenceData.dateState;

            items.forEach((item, key) => {
                let date;
                if (apikey === (PreferencesApiKey.api_UserFeeds)) {
                    // console.log('api_UserFeeds');
                    date = this.commonService.dateValue(item.creationDate);
                    dateList.push(date);
                }
                if (apikey === (PreferencesApiKey.api_InvitedCourses)) {
                    date = this.commonService.dateValue(item.creationDate);
                    // console.log('api_InvitedCourses');
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

            const notificationData = dateList.slice(0, keyIndex);
            if (newDateList.length === 0 && dateList.length === 1 && dateList[0] > currentPreferenceLastDate) {
                keyIndex = 1;
            }
            if (apikey === (PreferencesApiKey.api_UserFeeds) && dateList.length > 0) {
                // console.log('__headerInstance__', this.__headerInstance__);
                this.__headerInstance__.setNotification(notificationData);
            }
            currentPreferenceData.notification = notificationData;
            // console.log('keyIndex', keyIndex);
            // console.log('dateList', dateList);
            // console.log('lastDate', currentPreferenceLastDate);
            // console.log('total', dateList.slice(0, keyIndex));
        }
    }
}
