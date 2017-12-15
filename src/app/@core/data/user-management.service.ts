import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class UserManagementService {

  data = [{
    email: 'axis@gmail.com',
    role: 'admin',
    fullName: 'Arunkumar',
    authCode: '0000000000',
  }];
  isDev: boolean;
  authToken: any;


  constructor (private http: Http) {
    this.isDev = true;
  }

  getData() {
    return this.data;
  }

  getUsers() {
  const ep = this.prepEndpoint('users/getUsers');
  return this.http.get(ep)
    .map(res => res.json());
}

loadToken() {
  const token = localStorage.getItem('auth_app_token');
  this.authToken = token;
}

prepEndpoint(ep) {
  if ( this.isDev ) {
    return ep;
  } else {
    return 'http://localhost:3000/' + ep;
  }
  }

}
