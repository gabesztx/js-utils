import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { HttpService } from './http-service';
import { CommonRuntimeConfig } from '@nexius/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FileuploadService {
    public apiUrl: string;
    constructor(
        private http: HttpClient,
        private httpService: HttpService,
        public config: CommonRuntimeConfig,
    ) {
        this.apiUrl = this.config.baseApiUrl;
    }

    upload(postData: any, invitationId?: any): Observable<any> {
        const apiUrl = `${this.apiUrl}fileupload`;
        const formData = new FormData();
        formData.append('file', postData.fileData);
        const params = new HttpParams()
            .set('type', '1')
            .set('invitationId', invitationId);
        const req = new HttpRequest('POST', apiUrl, formData,{
            reportProgress: true,
            params: params
        });
        return this.http.request(req).pipe(
            map(response => response),
            catchError(this.httpService.handleError)
        );
    }
}
