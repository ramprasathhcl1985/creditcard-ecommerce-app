import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationConstants } from '../../../constants/constant';
import { IRegister } from '../../../models/model';
import { UserService } from '../../../core-services/user.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public passwordNotmatchError = false;
  public userDetailsToScreen = false;
  public inValidAge = false;
  public userGeneratedPassword: string;
  public userRegisterForm: FormGroup;
  public fullName = new FormControl('', [Validators.required]);
  public userName = new FormControl('', [Validators.required]);
  public salary = new FormControl('', [Validators.required]);
  public dateOfBirth = new FormControl('', [Validators.required]);
  public mobileNo = new FormControl('', [Validators.required, Validators.pattern(ApplicationConstants.mobileValidationPattern)]);
  public address = new FormControl('', [Validators.required]);


  constructor(private fb: FormBuilder, private router: Router, private userApi: UserService, private messageService: MessageService) {
    this.userRegisterForm = this.fb.group({
      fullName: this.fullName,
      userName: this.userName,
      salary: this.salary,
      dateOfBirth: this.dateOfBirth,
      mobileNo: this.mobileNo,
      address: this.address

    });

  }

  ngOnInit() {

  }

  /* form submit to add the policy to the user*/
  public onSubmit(): void {
    if (this.userRegisterForm.valid) {
      const userAdd: IRegister = {
        name: this.fullName.value,
        userName: this.userName.value,
        salary: this.salary.value,
        dob: this.dateOfBirth.value,
        mobileNumber: this.mobileNo.value,
        address: this.address.value

      };
      this.userApi.registerUser(userAdd).subscribe((data) => {
        console.dir(data);
        this.userDetailsToScreen = true;
        this.inValidAge = false;
        this.messageService.add({
          severity: ApplicationConstants.toastSeverity,
          summary: '', detail: ApplicationConstants.registerationaddToast
        });
        this.userGeneratedPassword = `Password for your user name ${data.userResponseDto.userName} is ${data.userResponseDto.password}`;
        this.userRegisterForm.reset();

        setTimeout(() => this.router.navigateByUrl('user/login'), 7000);

      }, error => {

        this.inValidAge = true;
      });

    } else {
      Object.keys(this.userRegisterForm.controls).forEach(key => {
        this.userRegisterForm.controls[key].markAsDirty();

      });
    }

  }
}
