import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    CommonRoutingModule,

  ],
  exports: []
})
export class CommonModule { }
