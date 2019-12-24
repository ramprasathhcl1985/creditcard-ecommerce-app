import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationConstants } from '../../common-module/constants/constant';
import { HeaderService } from '../../common-module/core-services/header.service';
import { UserService } from '../../common-module/core-services/user.service';
import { IProducts } from '../../common-module/models/model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public userId: string;
  public productList: IProducts[];
  public showQualityError: boolean = false;
  public productPrice: number;

  constructor(private fb: FormBuilder, private router: Router, private headerService: HeaderService, private userService: UserService) { }

  ngOnInit() {
    this.userId = sessionStorage.getItem(ApplicationConstants.userLoginId);
    if (this.userId) {
      this.headerService.enableMenus.next(true);
      this.headerService.loginUserName.next(sessionStorage.getItem(ApplicationConstants.userLoginName));
    }
    this.getProductList();
  }

  public getProductList() {
    this.userService.getProductList('').subscribe((data) => {
      this.productList = data.productDtos;
      console.dir(data);
    });

  }

  // method to add the item to the cart 
  public addToCart(productItem: IProducts, quantity: string) {

    Number(quantity) >= 1 ? (this.showQualityError = false, this.setProductItemTocart(productItem, Number(quantity))) : this.showQualityError = true;

  }
  public setProductItemTocart(productItem: IProducts, quantity: number) {
    this.productPrice = Number(quantity * productItem.price);
    const productUrl = `/ecommerce/payment/${productItem.productId}/${this.productPrice}`;
    this.router.navigateByUrl(productUrl);

  }

}
