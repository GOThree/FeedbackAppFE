import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from './../shared/auth/user.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  moduleId: module.id,
  templateUrl: 'forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm : FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder, private toastr: ToastsManager) {
    let emailRegex = `([a-zA-Z0-9_.]{1}[a-zA-Z0-9_.]*)((@[a-zA-Z]{2}[a-zA-Z]*)[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))`;
    this.forgotPasswordForm = fb.group({
     'email' : [null, Validators.compose([Validators.pattern(emailRegex), Validators.required ])],
    })
  }

  forgotPassword(value: any) {
    this.userService.forgotPassword(value.email).
      subscribe(
        data => {
          this.toastr.success('Successful forgot password request.')
          this.router.navigate(['login']);
        },
        err => this.toastr.error('Something went wrong. Please try again.')
      );
  }
}
