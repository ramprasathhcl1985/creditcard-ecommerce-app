import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationConstants } from '../constants/constant';
import { HeaderService } from '../core-services/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public showMenus = false;
  public userName = '';
  public userId = '';


  constructor(private router: Router, private headerService: HeaderService) { }

  ngOnInit() {
    if (sessionStorage.getItem('USER-LOGIN-ID')) {
      this.userId = sessionStorage.getItem('USER-LOGIN-ID');
      this.showMenus = true;
      //  this.getLoginUserDetails();
    }
    /* to enable menus */
    this.headerService.enableMenus.subscribe((data) => {
      this.showMenus = data;
    });

    /* to enable user name */
    this.headerService.loginUserName.subscribe((data) => {
      this.userName = data;
    });
  }

  /* to logout the user */
  public logout(event) {
    event.preventDefault();
    sessionStorage.removeItem(ApplicationConstants.userLoginId);
    sessionStorage.removeItem(ApplicationConstants.userLoginName);
    this.headerService.enableMenus.next(false);
    this.headerService.loginUserName.next('');
    this.router.navigateByUrl('/login');

  }

}
