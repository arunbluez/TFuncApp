import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-frontend-layout',
  template: `
    <nb-layout windowMode>
     <nb-layout-header fixed>
        <ngx-home-header></ngx-home-header>
      </nb-layout-header>

      <nb-layout-column class="main-content">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>


      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>

    </nb-layout>
  `,
  styleUrls: ['./frontend.layout.css'],
})

  export class FrontendLayoutComponent {

    constructor(private themeService: NbThemeService) {
   }

   this.themeService.changeTheme('home');
}
