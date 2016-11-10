import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgotpassword.component';
import { UserService } from './../shared/auth/user.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ForgotPasswordComponent],
  exports: [ForgotPasswordComponent],
  providers: [UserService]
})
export class ForgotPasswordModule { }
