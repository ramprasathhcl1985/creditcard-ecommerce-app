import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationConstants } from '../../common-module/constants/constant';
import { HeaderService } from '../../common-module/core-services/header.service';
import { IPaymentBuy, IProductBuy } from '../../common-module/models/model';
import { UserService } from '../../common-module/core-services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  public userId: string;
  public productId: number;
  public productPrice: number;
  public productPayment: FormGroup;
  public inValidCreditCard: boolean = false;
  public paymentSuccess: boolean = false;
  public cardNumber = new FormControl('', [Validators.required]);
  public cardCCV = new FormControl('', [Validators.required]);
  public cardExpiration = new FormControl('', [Validators.required]);
  public enterOTP = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder, private headerService: HeaderService, private router: Router, private route: ActivatedRoute,
    private userService: UserService, private datePipe: DatePipe) {
    this.productPayment = this.fb.group({
      cardNumber: this.cardNumber,
      cardCCV: this.cardCCV,
      cardExpiration: this.cardExpiration,
      enterOTP: this.enterOTP

    });
    this.route.params.subscribe((params) => {
      this.productId = params.productId;
      this.productPrice = params.amount;
    });
  }

  ngOnInit() {
    this.userId = sessionStorage.getItem(ApplicationConstants.userLoginId);
    if (this.userId) {
      this.headerService.enableMenus.next(true);
      this.headerService.loginUserName.next(sessionStorage.getItem(ApplicationConstants.userLoginName));
    }
  }

  public onSubmit(): void {
    if (this.productPayment.valid) {
      let productItem: IProductBuy[] = [{
        productId: this.productId,
        productPrice: this.productPrice,
        availableQty: 1
      }];
      const paymentDetails: IPaymentBuy = {
        cardNumber: this.cardNumber.value,
        cvvNumber: this.cardCCV.value,
        expiryDate: this.datePipe.transform(this.cardExpiration.value, "yyyy-MM-d"),
        otp: this.enterOTP.value,
        userId: Number(this.userId),
        products: productItem
      };

      this.userService.postPaymentData(paymentDetails).subscribe((data) => {

        this.inValidCreditCard = false;
        this.paymentSuccess = true;
        this.productPayment.reset();


      },
        error => {
          this.inValidCreditCard = true;

        });


    } else {
      Object.keys(this.productPayment.controls).forEach(key => {
        this.productPayment.controls[key].markAsDirty();

      });
    }
  }

  public generateOtp(): void {
    this.userService.postOtpData('', this.userId).subscribe((data) => {
      this.userService.getOTP(this.userId).subscribe((data) => {
        this.productPayment.patchValue({ enterOTP: data.otpValue });
      })

    });

  }

}
