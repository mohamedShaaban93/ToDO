import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';

 @Injectable()
export class AuthserviceService {

   baseUrl = 'https://todopayme.herokuapp.com/api/';
   CurrentUser: User = new User( '', '', '');

   login(user: User) {
     return this.http.post < User > (this.baseUrl + 'login' , user);
   }

   register(user: User ) {
     return this.http.post < User > (this.baseUrl + 'register', user);
   }

   setToken(token: string){
     localStorage.setItem('Token', token);
   }

   removeToken() {
     localStorage.removeItem('Token');
   }

   getToken(): string {
     return localStorage.getItem('Token');
   }

   isAuthenticated() {
     return this.getToken() != null;
   }
  constructor(
    private http: HttpClient
  ) { }
}
