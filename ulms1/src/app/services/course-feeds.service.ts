import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpProxy} from './base/http-proxy.class';
import {RuntimeConfigService} from './runtime-config.service';
import {PreferencesApiKey} from '../models/user.model';
import {PreferencesService} from './preferences.service';

@Injectable()
export class CourseFeedsService extends HttpProxy {
    public feedsData: any;

    constructor(protected http: Http, private config: RuntimeConfigService, private preferences: PreferencesService) {
        super();
    }

    list(): Observable<any> {
        if (this.feedsData) {
            console.log('CourseFeedsService OK!');
            return this.feedsData;
        }
        const apiUrl = `${this.config.baseApiUrl}feeds`;
        console.log('CourseFeedsService GET LIST!');
        return this.get(apiUrl).map(value => {
            this.feedsData = {
                courseFeeds: value.items
            };

            this.preferences.setCurrentPreference(PreferencesApiKey.api_UserFeeds, value.items);
            return this.feedsData;
        });
    }

}
