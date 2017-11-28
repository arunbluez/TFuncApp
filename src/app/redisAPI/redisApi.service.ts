import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { UserService } from '../@core/data/users.service';

@Injectable()
export class RedisApiService {
  authToken: any;
  user: any;
  isDev: boolean;

  constructor(private http: Http, private userService: UserService) {
    this.isDev = false;
  }

  dashBtnClick(state, pin) {
    this.loadToken();
    this.user = this.userService.getUser();
    const headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const ep = this.prepEndpoint('control/dashboard/', state, pin, this.user);
    return this.http.get(ep, {headers: headers})
      .subscribe(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  prepEndpoint(ep, state, pin, user) {
    if (this.isDev) {
      return ep;
    } else {
      return ep + 'dashBtn/' + state + '/' + pin + '/' + user.value.id;
    }
  }
}
