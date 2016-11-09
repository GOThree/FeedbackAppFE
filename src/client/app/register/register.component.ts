import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from './../shared/auth/user.service';
// import {Control, ControlGroup} from '@angular/common';

@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm : FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
    let emailRegex = `([a-zA-Z0-9_.]{1}[a-zA-Z0-9_.]*)((@[a-zA-Z]{2}[a-zA-Z]*)[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))`;
    this.registerForm = fb.group({
     'email' : [null, Validators.compose([Validators.pattern(emailRegex), Validators.required ])],
     'password' : [null, Validators.compose([Validators.required])],
     'firstName' : [null, Validators.compose([Validators.required])],
     'lastName' : [null, Validators.compose([Validators.required])],
      // passwords: fb.group({
      //   'password': [null, Validators.required],
      //   'confirmPassword': [null, Validators.required]
      // }, {validator: this.areEqual})
    })
  }

  // areEqual(group: ControlGroup) {
  //   return true;
  // }

  register(value: any) {
    console.log(this.registerForm)
    console.log(value);
    // this.userService.register(email, password).subscribe((result) => {
    //   if (result) {
    //     this.router.navigate(['']);
    //   }
    // });
  }
}
