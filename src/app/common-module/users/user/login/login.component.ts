import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ILogin } from '../../../models/model';
import { HeaderService } from '../../../core-services/header.service';
import { ApplicationConstants } from '../../../constants/constant';
import { UserService } from '../../../core-services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userLogin: FormGroup;
  public loginType: string;
  public isEcommerceLogin: boolean = false;
  public inValidUserMessage = '';

  public userName = new FormControl('', [Validators.required]);
  public userPassword = new FormControl('', [Validators.required]);
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute,
    private headerService: HeaderService, private userService: UserService) {
    this.userLogin = this.fb.group({
      userName: this.userName,
      userPassword: this.userPassword
    });
    /* to subscribe the policy details*/
    this.route.params.subscribe(params => this.loginType = params.type);

    if (this.loginType === 'ecommerce') {

      this.isEcommerceLogin = true;
    } else {
      this.isEcommerceLogin = false;
    }

  }

  ngOnInit() {
  }
  /* form submit to add the policy to the user*/
  public onSubmit(): void {
    if (this.userLogin.valid) {
      const userLogin: ILogin = {
        userName: this.userName.value,
        password: this.userPassword.value

      };

      this.userService.loginUser(userLogin).subscribe((data) => {
        this.inValidUserMessage = '';

        sessionStorage.setItem(ApplicationConstants.userLoginId, data.userId.toString());
        sessionStorage.setItem(ApplicationConstants.userLoginName, data.name.toString());
        this.headerService.enableMenus.next(true);
        this.headerService.loginUserName.next(data.name.toString());
        if (this.isEcommerceLogin) {
          this.router.navigateByUrl('/ecommerce');

        } else {
          this.router.navigateByUrl('/user/dashboard');
        }
      }, error => {

        this.inValidUserMessage = ApplicationConstants.loginErrorMessage;
      }
      );

    } else {

      Object.keys(this.userLogin.controls).forEach(key => {
        this.userLogin.controls[key].markAsDirty();

      });
    }
  }

}
