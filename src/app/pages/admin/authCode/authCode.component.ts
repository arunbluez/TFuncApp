import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { UserManagementService } from '../../../@core/data/user-management.service';

@Component({
  selector: 'ngx-authCode',
  templateUrl: './authCode.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class authCodeComponent {

  authCode: any;

  constructor(private service: UserManagementService) {
  }


generateAuthCode(){
  this.service.generateAuthCode().subscribe(data => {
    this.authCode = data;
  },
  err => {
    return false;
  });
}

}
