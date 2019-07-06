import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  configUrl: string;
  httpOptions: any;

  constructor(private http: HttpClient) {
    this.configUrl = 'assets/config.json';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getConfig(): Observable<any> {
    return this.http.get(this.configUrl);
  }

  postData(data: any): Observable<any> {
    return this.http.post('/post', data, this.httpOptions);
  }

}
