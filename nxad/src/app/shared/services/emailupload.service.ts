import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CommonRuntimeConfig } from '@nexius/core';
import { HttpService } from './http-service';

@Injectable({
    providedIn: 'root'
})


export class EmailuploadService {
    public apiFileUploadUrl = 'fileupload';

    constructor(
        private http: HttpClient,
        private httpService: HttpService,
        public commonRuntimeConfig: CommonRuntimeConfig,
    ) {}

    uploadInvite(postData: any, name: string): Observable<any> {

        const apiUrl = this.commonRuntimeConfig.baseApiUrl + 'fileupload';
        const formData = new FormData();

        formData.append(name, postData);
        const params = new HttpParams()
            .set('type', '1')
            .set('invitationId', '35dadfa1-38bd-4ddd-84db-03f2fdfebb91');

        const req = new HttpRequest('POST', apiUrl, formData, {
            reportProgress: true,
            params: params
        });

        return this.http.request(req).pipe(
            map(response => response),
            catchError(this.httpService.handleError)
        );
    }

}
