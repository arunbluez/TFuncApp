import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { NbAuthService } from '@nebular/auth/services/auth.service';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-home-header',
  styleUrls: ['./homeheader.component.scss'],
  templateUrl: './homeheader.component.html',
})
export class HomeHeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' , url: '#/users/profile'}, { title: 'Log out', url: '#/users/logout' }];

  MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Admin',
      icon: 'ion-paper-airplane',
      children: [
        {
          title: 'Server Settings',
          link: '/pages/admin/server/settings',
        },
        {
          title: 'Server management',
          link: '/pages/admin/server/management',
        },
        {
          title: 'User management',
          link: '/pages/admin/user-management',
        },
        {
          title: 'Servic management',
          link: '/pages/admin/service/management',
        },
      ],
    },
  ];



  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private nbAuthService: NbAuthService,
              private router: Router,
              private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.userService.getUser()
      .subscribe((users: any) => this.user = users);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  loginClick() {
    this.router.navigate(['users']);
  }

  registerClick() {
    this.router.navigate(['users/register']);
  }

  featuresClick() {
    this.router.navigate(['home/features']);
  }

  updatesClick() {
    this.router.navigate(['home/updates']);
  }

  contactClick() {
    this.router.navigate(['home/contact']);
  }

  isLoggedIn() {
    return this.nbAuthService.loggedIn();
  }

  onLogoutClick(){
    this.user = null;
    localStorage.clear();
    this.menuService.navigateHome();
    return false;
}
  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
