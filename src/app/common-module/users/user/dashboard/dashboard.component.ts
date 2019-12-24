import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationConstants } from '../../../constants/constant';
import { HeaderService } from '../../../core-services/header.service';
import { ITransactionLIst, ITransactionFilter, ICardDetails, ICreditCard } from '../../../models/model';
import { UserService } from '../../../core-services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public myTransferList: FormGroup;
  public userId: string;
  public monthList: string[];
  public yearsList: string[] = [];
  public tableHeaders: string[];
  public transferMonth = new FormControl('', [Validators.required]);
  public transferYear = new FormControl('', [Validators.required]);
  public transactionList: ITransactionLIst[];
  public noRecordsFound: boolean = false;
  public creditCard: ICreditCard;


  constructor(private fb: FormBuilder, private router: Router, private headerService: HeaderService, private userService: UserService) {
    this.myTransferList = this.fb.group({
      transferMonth: this.transferMonth,
      transferYear: this.transferYear,

    });
    this.monthList = ApplicationConstants.monthsList;

    this.tableHeaders = ApplicationConstants.transactionHeaders;
  }

  ngOnInit() {
    this.userId = sessionStorage.getItem(ApplicationConstants.userLoginId);
    if (this.userId) {
      this.headerService.enableMenus.next(true);
      this.headerService.loginUserName.next(sessionStorage.getItem(ApplicationConstants.userLoginName));
    }

    this.getYearsList();
    this.getCreditCardDetails();

  }
  private getYearsList(): void {
    const item: number = Number(new Date().getFullYear());
    for (let i = 0; i < 10; i++) {
      const year: number = (item - i);
      this.yearsList.push(year.toString());
    }

  }

  public getCreditCardDetails() {
    this.userService.getCreditCardList(this.userId).subscribe((data) => {
      console.dir(data);
      this.creditCard = data;
    })

  }

  public onSubmit(): void {
    if (this.myTransferList.valid) {
      const transactionFilter: ITransactionFilter = {
        month: Number(this.transferMonth.value) + 1,
        year: Number(this.transferYear.value)
      };

      this.userService.getTransactionList(transactionFilter, this.userId).subscribe((data) => {
        this.transactionList = data.transactionListResponseDto;
        this.noRecordsFound = false;
      }, error => {

        this.noRecordsFound = true;
      });



    } else {
      Object.keys(this.myTransferList.controls).forEach(key => {
        this.myTransferList.controls[key].markAsDirty();

      });
    }

  }

}
