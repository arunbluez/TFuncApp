import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { UserManagementService } from '../../../@core/data/user-management.service';

@Component({
  selector: 'ngx-user-management',
  templateUrl: './user-management.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class UserManagementComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      fullName: {
        title: 'Name',
        type: 'string',
      },
      email: {
        title: 'email',
        type: 'string',
      },
      authCode: {
        title: 'Unique Code',
        type: 'string',
      },
      role: {
        title: 'Role',
        type: 'string',
      },
    },
  };
  users: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: UserManagementService) {
    this.service.getUsers().subscribe(data => {
      this.users = data;
      this.source.load(this.users);
    },
    err => {
      return false;
    });


  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
