import { Injectable } from '@angular/core';
import {
  ILogin, ILoginOutput, IRegister, IProductOutput, IProducts, IRegisterOutput, IPaymentBuy,
  IProductBuyOutput, IOtp, ITransactionLIst, ICreditCard, ITransactionFilter, ITransactionResponse
} from '../models/model';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../constants/constant';
import { RestService } from './rest.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userLoginService: RestService<ILoginOutput>,
    private userRegisterService: RestService<IRegisterOutput>,
    private userPaymentService: RestService<IProductBuyOutput>,
    private getProductsListService: RestService<IProductOutput>,
    private getOtpService: RestService<IOtp>,
    private getTransactionService: RestService<ITransactionResponse>,
    private getCreditCardService: RestService<ICreditCard>) { }

  /* to get the session for the login user*/
  public setSessionItem(itemLabel: string, itemData: string) {
    sessionStorage.setItem(itemLabel, itemData);

  }

  /* to add user to database */
  public loginUser(userData: ILogin): Observable<ILoginOutput> {
    return this.userLoginService.postData(userData, ApplicationConstants.loginBasePath, ApplicationConstants.loginEndpoint,
      ApplicationConstants.contentTYpe, ApplicationConstants.contentTYpe);
  }

  /* to add user to database */
  public registerUser(userData: IRegister): Observable<IRegisterOutput> {
    return this.userRegisterService.postData(userData, ApplicationConstants.registerationBasePath, ApplicationConstants.registerationEndpoint,
      ApplicationConstants.contentTYpe, ApplicationConstants.contentTYpe);
  }

  public getProductList(productId: string): Observable<IProductOutput> {
    return this.getProductsListService.getData(ApplicationConstants.productBasePath, ApplicationConstants.productEndpoint,
      ApplicationConstants.contentTYpe, productId);
  }

  public postPaymentData(paymentData: IPaymentBuy): Observable<IProductBuyOutput> {
    return this.userPaymentService.postData(paymentData, ApplicationConstants.productBasePath, ApplicationConstants.productEndpoint,
      ApplicationConstants.contentTYpe, ApplicationConstants.contentTYpe);
  }

  public getOTP(userId: string): Observable<IOtp> {
    const otpEndpoint = `creditcards/users/${userId}/otp`;
    return this.getOtpService.getData(ApplicationConstants.transactionBasePath, otpEndpoint,
      ApplicationConstants.contentTYpe, '');
  }

  public getTransactionList(filterData: ITransactionFilter, userId: string): Observable<ITransactionResponse> {
    const transactionEnd = `${ApplicationConstants.transactionEndpoint}/${userId}/reports`;
    return this.getTransactionService.postData(filterData, ApplicationConstants.transactionBasePath, transactionEnd,
      ApplicationConstants.contentTYpe, ApplicationConstants.contentTYpe);
  }

  public postOtpData(otp: string, userId: string): Observable<IOtp> {
    const otpEndpoint = `creditcards/users/${userId}/otp`;
    return this.getOtpService.postData(otp, ApplicationConstants.transactionBasePath, otpEndpoint,
      ApplicationConstants.contentTYpe, ApplicationConstants.contentTYpe);
  }

  public getCreditCardList(userId: string): Observable<ICreditCard> {
    const cardEndpoint = `creditcards/users/${userId}/creditcard`;
    return this.getCreditCardService.getData(ApplicationConstants.transactionBasePath, cardEndpoint,
      ApplicationConstants.contentTYpe, '');
  }

}
