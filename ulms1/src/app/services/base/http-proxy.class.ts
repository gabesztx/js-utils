// External imports
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/finally';
// Internal imports
import { HttpBase } from './http.class';

export interface Service {
    select(id: string, params?: any): Observable<any>;

    update(payload: any, params?: any): Observable<any>;

    create(payload: any, params?: any): Observable<any>;
}

// TODO Make this extensible/configurable on a per-request basis.

/**
 * @class HttpProxy
 * @abstract
 * @description
 * Abstract service intended to be implemented by resource services calling Http APIs. Defines GET, POST, PUT and DELETE
 * methods to facilitate server communication and adds error handilng to these method calls. This ties in with the
 * Session service: if error response status is 401, a SessionExpiredAction is dispatched to be handled by the
 * renewSession$ Effect.
 * See more about Actions: https://gist.github.com/btroncone/a6e4347326749f938510#actions
 * and Effects: https://github.com/ngrx/effects/blob/master/docs/intro.md#introduction
 */
export abstract class HttpProxy extends HttpBase {
    protected http: Http;

    constructor() {
        super();
    }

    protected get(url: string, userOptions?: RequestOptions) {
        const options: RequestOptions = this.createRequestOptions(userOptions);
        // const process: ProcessModel = this.createBackgroundProcess(options);
        return this.http.get(url, options)
            .map(this.extract)
            .catch(this.handleError)
            /*.finally(() => {
                this.removeBackgroundProcess(process);
            })*/;
    }

    protected post(url: string, payload, userOptions?: RequestOptions) {
        const options: RequestOptions = this.createRequestOptions(userOptions);
        // const process: ProcessModel = this.createBackgroundProcess(options);
        return this.http.post(url, payload, options)
            .map(this.postGetExtract)
            // .retryWhen(this.handleSessionTimeout.bind(this))
            .catch(this.handleError)
            /*.finally(() => {
                this.removeBackgroundProcess(process);
            })*/;
    }

    protected put(url: string, payload, userOptions?: RequestOptions) {
        const options: RequestOptions = this.createRequestOptions(userOptions);
        // const process: ProcessModel = this.createBackgroundProcess(options);

        return this.http.put(url, payload, options)
            .map(this.extract)
            // .retryWhen(this.handleSessionTimeout.bind(this))
            .catch(this.handleError)
            /*.finally(() => {
                this.removeBackgroundProcess(process);
            })*/;
    }

    /* TODO: course detail navigation: when status:3x redirect */
    private extract(res: Response) {
        return res.json();
    }
    private postGetExtract(res: Response) {
         try {
              const body = res.json();
              if (body.items && body.items.length !== undefined) {
                  return body.items;
              } else {
                  return body;
              }
         } catch (err) {
             return Observable.throw(res);
         }
    }

}
