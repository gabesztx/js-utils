"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// External imports
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
var HttpBase = /** @class */ (function () {
    function HttpBase() {
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        this.defaultRequestOptions = new http_1.RequestOptions({
            headers: this.headers,
            withCredentials: true /*,
            responseType: ResponseContentType.Json*/ // NOTE Don't do this, will error out on responses with no payload (like 401)!
        });
    }
    HttpBase.prototype.createRequestOptions = function (opts) {
        var options;
        if (opts) {
            options = this.defaultRequestOptions.merge(opts);
        }
        else {
            options = this.defaultRequestOptions;
        }
        return options;
    };
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
    HttpBase.prototype.handleSessionTimeout = function (error) {
        return Observable_1.Observable.of(true);
    };
    /**
     * @method handleError
     * @protected
     * @description
     * Run-of-the-mill error handling for bad requests (after 401-check). TODO This needs to be formalized.
     * @param  {Response}        error the error response object from the server.
     * @return {Observable<any>}       ErrorObservable with the error message. TODO Formalize eror reporting format!
     */
    HttpBase.prototype.handleError = function (error) {
        console.log('HANDLE ERROR');
        var errMsg;
        var errorResponse;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errorResponse = {
                status: error.status,
                message: err
            };
        }
        else {
            errMsg = error.message ? error.message : error.toString();
            errorResponse = {
                status: 0,
                message: errMsg
            };
        }
        return Observable_1.Observable.throw(errorResponse);
    };
    return HttpBase;
}());
exports.HttpBase = HttpBase;
