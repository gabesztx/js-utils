import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  };
  phone: string;
  website: string;
  company: {x
    name: string
    catchPhrase: string;
    bs: string
  }
}


@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/users';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })

  };
  constructor(private http: HttpClient) {
  }


  getUsers(): Observable<any> {
    return this.http.get(this.API_URL, this.httpOptions);
  }


  getUser(id: any): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`, this.httpOptions);
  }
}
