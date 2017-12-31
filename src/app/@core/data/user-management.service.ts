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
    this.isDev = false;
  }

  getData() {
    return this.data;
  }

  getUsers() {
  const ep = this.prepEndpoint('users/getUsers');
  return this.http.get(ep)
    .map(res => res.json());
}

getUserRole(email) {
  const ep = this.prepEndpoint('users/getUserRole/' + email);
  return this.http.get(ep)
    .map(res => res.json());
}


registerUser(user) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const ep = this.prepEndpoint('users/register');
  return this.http.post(ep, user, {headers: headers})
    .map(res => res.json());
}

editUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('users/edit/');
    return this.http.put(ep, JSON.stringify(user), {headers: headers})
        .map(res => res.json());
}

deleteUser(email) {
  const ep = this.prepEndpoint('users/delete/' + email);
  return this.http.delete(ep)
    .map(res => res.json());
}

loadToken() {
  const token = localStorage.getItem('auth_app_token');
  this.authToken = token;
}


generateAuthCode() {
  const ep = this.prepEndpoint('users/generateAuthCode');
  return this.http.get(ep)
      .map(res => res.json());
}

prepEndpoint(ep) {
  if ( this.isDev ) {
    return ep;
  } else {
    return 'https://localhost:3000/' + ep;
  }
  }

}
