import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserModule } from '../common-module/users/user/user.module';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { CalendarModule } from 'primeng/calendar';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [ProductListComponent, PaymentDetailsComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    UserModule,
    CalendarModule,
  ],
  providers: [MessageService, DatePipe]
})
export class FeatureModule { }
