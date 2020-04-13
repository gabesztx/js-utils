import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  company: {
    name: string
    catchPhrase: string;
    bs: string
  };
}


@Injectable({
  providedIn: 'root'
})

export class UserDataService {
  private API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}


  getUsers(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  getUser(id: any): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }
}

/*
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};*/
