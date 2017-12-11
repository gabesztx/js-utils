import {Injectable} from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {HttpProxy} from './base/http-proxy.class';
import {RuntimeConfigService} from './runtime-config.service';
import {RestApiResponse} from './base/http.class';
import {SearchModel} from '../models/search.model';


@Injectable()
export class CourseFeedsService extends HttpProxy {
    constructor(protected http: Http, private config: RuntimeConfigService) {
        super();
    }

    getFeeds(): Observable<any> {
        const apiUrl = `${this.config.baseApiUrl}feeds`;
        return this.get(apiUrl).map(value => {
            return {courseFeeds: value.items};
        });
    }

}
