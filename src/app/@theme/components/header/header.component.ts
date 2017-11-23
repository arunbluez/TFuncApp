import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { NbAuthService } from '@nebular/auth/services/auth.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' , url: '#/users/profile'}, { title: 'Log out', url: '#/users/logout' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private nbAuthService: NbAuthService,
              private router:Router,
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

  loginClick(){
    this.router.navigate(['users']);
  }

  registerClick(){
    this.router.navigate(['users/register']);
  }

  isLoggedIn(){
    return this.nbAuthService.loggedIn();
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
