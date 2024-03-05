import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { EmailValidatorService } from './helpers/email-validator.service';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SideMenuComponent,
  ],
  providers: [ EmailValidatorService]
})
export class SharedModule { }
