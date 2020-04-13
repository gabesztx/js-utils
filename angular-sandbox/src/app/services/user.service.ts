import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'http://localhost:4200/api'

  constructor(private httpClient: HttpClient) {
  }

  public getUsers() {
    return this.httpClient.get(`${this.API_URL}/users`);
  }

  public getUser(id: number) {
    return this.httpClient.get(`${this.API_URL}/users/${id}`);
  }
}
