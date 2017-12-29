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
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
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
    const deleteEmail = event.data['email'];
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.deleteUser(deleteEmail).subscribe(data => {
      },
      err => {
        return false;
      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    const user = {
      fullName: event.newData['fullName'],
      email: event.newData['email'],
      authCode: event.newData['authCode'],
      role: event.newData['role'],
    };

    if (window.confirm('Are you sure you want to save?')) {
      this.service.editUser(user).subscribe(data => {
      },
      err => {
        return false;
      });
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    const user = {
      fullName: event.newData['fullName'],
      email: event.newData['email'],
      authCode: event.newData['authCode'],
      password: 'defaultPass',
      role: event.newData['role'],
    };

    if (window.confirm('Are you sure you want to create?')) {
      this.service.registerUser(user).subscribe(data => {
      },
      err => {
        return false;
      });
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
}
