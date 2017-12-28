import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-backend-layout>
      <nb-menu [items]="menu" [tag]="dashMenu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-backend-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
  dashMenu = "dashMenu";
}
