import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from './../shared/auth/user.service';

@Component({
  moduleId: module.id,
  templateUrl: 'forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm : FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
    let emailRegex = `([a-zA-Z0-9_.]{1}[a-zA-Z0-9_.]*)((@[a-zA-Z]{2}[a-zA-Z]*)[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))`;
    this.forgotPasswordForm = fb.group({
     'email' : [null, Validators.compose([Validators.pattern(emailRegex), Validators.required ])],
    })
  }

  forgotPassword(value: any) {
    console.log(this.forgotPasswordForm)
    console.log(value);
    // this.userService.forgotPassword(value).subscribe((result) => {
    //   if (result) {
    //     this.router.navigate(['']);
    //   }
    // });
  }
}
