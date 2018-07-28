// External imports
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// Internal imports

export interface ErrorResponse {
    status: number;
    message: string;
}

export abstract class HttpBase {

    protected headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('X-Requested-With', 'XMLHttpRequest');

    protected defaultRequestOptions = {
        headers: this.headers,
        observe: 'response',
        responseType: 'json',
        withCredentials: true
    };

    protected createRequestOptions(opts?: any) {
        if (opts) {
            return {
                ...this.defaultRequestOptions,
                ...opts
            };
        }

        return this.defaultRequestOptions;
    }

    /**
     * @method handleError
     * @description
     * Run-of-the-mill error handling for bad requests (after 401-check). TODO This needs to be formalized.
     * @param  error The error response object from the server.
     * @return       ErrorObservable with the error message. TODO Formalize eror reporting format!
     */
    protected handleError(error: HttpErrorResponse): Observable<ErrorResponse> {
        let errMsg: string;
        let errorRes: ErrorResponse;

        if (error.error instanceof ErrorEvent) {
            errMsg = error.error.message ? error.error.message : error.toString();
            errorRes = {
                status: 0,
                message: errMsg
            };
        } else {
            errorRes = {
                status: error.status,
                message: error.error
            };
        }

        console.error(`An error occured! Status: ${errorRes.status}, message: ${errorRes.message}`);
        return observableThrowError(errorRes);
    }

}
