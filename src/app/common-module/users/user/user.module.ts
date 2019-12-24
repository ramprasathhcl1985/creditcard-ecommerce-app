import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, DashboardComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    CalendarModule,
    ToastModule,
    TableModule

  ],
  exports: [LoginComponent],
  providers: [MessageService]
})
export class UserModule { }
