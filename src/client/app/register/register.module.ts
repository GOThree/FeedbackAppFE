import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { UserService } from './../shared/auth/user.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ToastModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  providers: [UserService]
})
export class RegisterModule { }
