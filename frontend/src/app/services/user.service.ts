import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Authentication } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = 'http://localhost:80/';
    this.myApiUrl = 'users/';
  }

  validateUser(login: Authentication) :Observable<User>{
    return this.http.post<User>(`${this.myAppUrl}${this.myApiUrl}`, login);
  }
}
