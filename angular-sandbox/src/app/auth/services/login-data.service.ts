import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginDataService {
  locationURL = 'https://ipapi.co/json';
  generatorURL = 'https://itsr.hu/GenerateAnonymous.php';
  bookURL = 'https://www.googleapis.com/books/v1/volumes?q=xaktak';
  constructor(private http: HttpClient) { }

  getLocation(): Observable<any> {
    return this.http.get(this.locationURL);
  }
  getGenerator(): Observable<any> {
    return this.http.get(this.generatorURL);
  }
  getBook(): Observable<any> {
    return this.http.get(this.bookURL);
  }

}
