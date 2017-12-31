import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AuthCodeComponent } from './authCode/authCode.component';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: 'user-management',
    component: UserManagementComponent,
  },
  {
    path: 'authCode',
    component: AuthCodeComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routedComponents = [
  AdminComponent,
  UserManagementComponent,
  AuthCodeComponent,
];
