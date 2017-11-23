import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { NbAuthService } from '@nebular/auth/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:NbAuthService, private router:Router){

  }

  canActivate(){
    if(this.authService.loggedIn()){
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
