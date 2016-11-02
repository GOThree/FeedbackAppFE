import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { UserService } from './user.service'

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [UserService]
})
export class LoginModule { }
