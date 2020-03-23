import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Course {
  description: string;
  courseListIcon: string;
  iconUrl: string;
  longDescription: string;
  url: string;
  patientList: any;
}


@Injectable()

export class HttpService {
  REST_API_SERVER = 'https://angular-http-guide.firebaseio.com/courses.json';
  REST_API_PARAMS_SERVER = 'https://angular-http-guide.firebaseio.com/courses.json?orderBy=%22$key%22&limitToFirst=1';

  constructor(private http: HttpClient) {
  }

  /* GET */
  getCourse$(): Observable<Course> {
    return this.http.get<Course>(this.REST_API_SERVER);
  }

  /* GET - headers, params */
  getCourseParam$(): Observable<Course> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': 'my-auth-token'
      })
      
    };

    console.log('getCourseParam$');
    const params = new HttpParams()
      .set('orderBy', '"$key"')
      .set('limitToFirst', '1');

    return this.http.get<Course>(this.REST_API_SERVER, httpOptions);
  }
}
