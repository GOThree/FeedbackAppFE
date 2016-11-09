import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { UserService } from './../shared/auth/user.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  providers: [UserService]
})
export class RegisterModule { }
