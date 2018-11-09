import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CommonRuntimeConfig } from '@nexius/core';
import { HttpService } from './http-service';

@Injectable({
    providedIn: 'root'
})


export class EmailuploadService {
    public apiUrl: string;
    constructor(
        private http: HttpClient,
        private httpService: HttpService,
        public config: CommonRuntimeConfig,
    ) {
        this.apiUrl = this.config.baseApiUrl;
    }

    upload(postData: any, courseId: any, invitationId: any): Observable<any> {
        const apiUrl = `${this.apiUrl}lmsadmin/courses/${courseId}/invitations/${invitationId}/userinvitations`;
        const req = new HttpRequest('POST', apiUrl, {
            emails: postData.emailData
        });
        return this.http.request(req).pipe(
            map(response => response),
            catchError(this.httpService.handleError)
        );
    }
}
