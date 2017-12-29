import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { UserManagementService } from '../../../@core/data/user-management.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { NbAuthService } from '@nebular/auth/services/auth.service';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  providers: [UserManagementService]
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;
  role: any;

  userMenu = [{ title: 'Profile' , url: '#/users/profile'}, { title: 'Log out', url: '#/users/logout' }];

  ADMIN_ITEMS: NbMenuItem[] = [
    {
      title: 'Admin',
      icon: 'ion-paper-airplane',
      children: [
        {
          title: 'Server Settings',
          link: '/pages/admin/server-settings',
        },
        {
          title: 'Server management',
          link: '/pages/admin/server-management',
        },
        {
          title: 'User management',
          link: '/pages/admin/user-management',
        },
        {
          title: 'Servic management',
          link: '/pages/admin/service-management',
        },
        {
          title: 'Generate Auth Code',
          link: '/pages/admin/authCode',
        },
      ],
    },
  ];

  SERVICE_ITEMS: NbMenuItem[] = [
    {
      title: 'Serive Technicians',
      icon: 'ion-settings',
      children: [
        {
          title: 'Import Modules',
          link: '/pages/service/import',
        },
        {
          title: 'User management',
          link: '/pages/service/users',
        },
      ],
    },
  ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private userManagementService: UserManagementService,
              private nbAuthService: NbAuthService,
              private router: Router,
              private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    this.userService.getUser()
      .subscribe((users: any) => this.user = users);

      this.userManagementService.getUserRole(this.user.email)
        .subscribe(data => {
          this.role = data;
          if(this.role == "admin"){
            this.menuService.addItems(this.SERVICE_ITEMS, "dashMenu");
            this.menuService.addItems(this.ADMIN_ITEMS, "dashMenu");
          } else if (this.role == "service"){
            this.menuService.addItems(this.SERVICE_ITEMS, "dashMenu");
          }
        },
        err => {
          return false;
        });

console.log(this.role);

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

  isLoggedIn() {
    return this.nbAuthService.loggedIn();
  }

  onMenuClick(){
    console.log("test menu click");
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
