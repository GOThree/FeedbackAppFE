import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from './../shared/auth/user.service';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm : FormGroup;

  constructor(private userService: UserService, private router: Router,private fb: FormBuilder) {
    let emailRegex = `([a-zA-Z0-9_.]{1}[a-zA-Z0-9_.]*)((@[a-zA-Z]{2}[a-zA-Z]*)[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))`;
    this.loginForm = fb.group({
      'email' : [null, Validators.compose([Validators.pattern(emailRegex), Validators.required ])],
      'password' : [null, Validators.compose([Validators.required])],
    })
  }

  login(value: any) {
    console.log(value);
    // this.userService.login(email, password).subscribe((result) => {
    //   if (result) {
    //     this.router.navigate(['']);
    //   }
    // });
  }
}
