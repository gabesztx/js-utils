// External imports
import {throwError as observableThrowError,  Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
// Internal imports
import { HttpBase } from './http-base.class';

// TODO Make this extensible/configurable on a per-request basis.

/**
 * @name HttpProxy
 * @description
 * Abstract service intended to be implemented by resource services calling Http APIs. Defines GET, POST, PUT and DELETE
 * methods to facilitate server communication and adds error handilng to these method calls. This ties in with the
 * Session service: if error response status is 401, a SessionExpiredAction is dispatched to be handled by the
 * renewSession$ Effect.
 * See more about Actions: https://gist.github.com/btroncone/a6e4347326749f938510#actions
 * and Effects: https://github.com/ngrx/effects/blob/master/docs/intro.md#introduction
 */
export abstract class HttpProxy extends HttpBase {

    protected http: HttpClient;

    constructor() {
        super();
    }

    protected get<T>(url: string, userOptions?: any): Observable<T> {
        const options: any = this.createRequestOptions(userOptions);

        return this.http.get<T>(url, options).pipe(
            map(this.extract),
            catchError(this.handleError),
        );
    }

    protected post<T>(url: string, payload, userOptions?: any): Observable<T> {
        const options: any = this.createRequestOptions(userOptions);

        return this.http.post<T>(url, payload, options).pipe(
            map(this.extract),
            catchError(this.handleError),
        );
    }

    protected put<T>(url: string, payload, userOptions?: any): Observable<T> {
        const options: any = this.createRequestOptions(userOptions);

        return this.http.put<T>(url, payload, options).pipe(
            map(this.extract),
            catchError(this.handleError),
        );
    }

    protected delete<T>(url: string) {
        // TODO Implement
    }

    private extract(res: HttpResponse<any>, index): any {
        try {
            const body = res.body;

            if (body.items && body.items.length !== undefined) {
                return body.items;
            } else {
                return body;
            }
        } catch (err) {
            return observableThrowError(res);
        }
    }

}
