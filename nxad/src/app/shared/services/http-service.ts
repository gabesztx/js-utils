import { throwError as observableThrowError, Observable } from 'rxjs';
// External imports
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpService {
    public headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .set('X-Requested-With', 'XMLHttpRequest');

    public defaultRequestOptions = {
        headers: this.headers,
        withCredentials: true
    };

    public createRequestOptions(opts?: any) {
        if (opts) {
            return {
                ...this.defaultRequestOptions,
                ...opts
            };
        }
        return this.defaultRequestOptions;
    }


    public handleError(responseError: HttpErrorResponse | any) {
        // if (responseError instanceof HttpErrorResponse) {}
        return observableThrowError(responseError);
    }
}
