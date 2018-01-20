// External imports
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
// Internal imports

interface ErrorResponse {
    status: number;
    message: string;
}

export interface RestApiResponse<T> {
    items: T;
    currentPage?: number;
    hasNextPage?: boolean;
    pageSize?: number;
    total?: number;
    totalPages?: number;
}

export abstract class HttpBase {

    protected headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    protected defaultRequestOptions = new RequestOptions({
        headers: this.headers,
        withCredentials: true/*,
        responseType: ResponseContentType.Json*/ // NOTE Don't do this, will error out on responses with no payload (like 401)!
    });

    protected createRequestOptions(opts?: RequestOptions): RequestOptions {
        let options: RequestOptions;

        if (opts) {
            options = this.defaultRequestOptions.merge(opts);
        } else {
            options = this.defaultRequestOptions;
        }

        return options;
    }

    /**
     * @method handleSessionTimeout
     * @protected
     * @description
     * Handles the 401 branch of server errors: if the server responds with a 401 Unauthorized, a SessionExpiredAction
     * will be dipatched to be handled by the renewSession$ Effect, and the incoming ErrorObservable will be mapped to
     * an empty Observable when the SESSION_RENEWED action returns from the anctions$ stream (which signals a successful
     * session renewal attempt). If the error is of another type than 401, it's thrown on as an ErrorObservable.
     * When this mechanism is used in a retryWhen error handilng operator, the source Observable (the http request) will
     * be retried when the incoming ErrorObservable is mapped to the aforementioned empty Observable - Observable.empty().
     * More about RxJS error handling:
     * https://xgrommx.github.io/rx-book/content/getting_started_with_rxjs/creating_and_querying_observable_sequences/error_handling.html,
     * Observable.retryWhen: https://www.learnrxjs.io/operators/error_handling/retrywhen.html,
     * Observable.switchMap: https://www.learnrxjs.io/operators/transformation/switchmap.html,
     * Observable.empty: https://www.learnrxjs.io/operators/creation/empty.html
     * @param  {Observable<Response>} error Error Reponse returned by the server
     * @return {Observable<any>}            Etiher maps to an ErrorObservable if the renewal failed or to an empty
     *                                      Observable on a successful session renewal.
     */
    protected handleSessionTimeout(error: Observable<Response | any>): Observable<any> {
        return Observable.of(true);
    }

    /**
     * @method handleError
     * @protected
     * @description
     * Run-of-the-mill error handling for bad requests (after 401-check). TODO This needs to be formalized.
     * @param  {Response}        error the error response object from the server.
     * @return {Observable<any>}       ErrorObservable with the error message. TODO Formalize eror reporting format!
     */
    protected handleError(error: Response | any): Observable<any> {

        let errMsg: string;
        let errorResponse: ErrorResponse;

        if (error instanceof Response) {
            // console.log('ERROR BODY', error)
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);

            errorResponse = {
                status: error.status,
                message: err
            };
        } else {
            errMsg = error.message ? error.message : error.toString();
            errorResponse = {
                status: 0,
                message: errMsg
            };
        }
        console.log('-----------------------------handleError-------------------------------------')
        return Observable.throw(errorResponse);
    }

}
