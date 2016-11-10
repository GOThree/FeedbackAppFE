import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from './../shared/auth/user.service';

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
     'firstName' : [null, Validators.compose([Validators.required])],
     'lastName' : [null, Validators.compose([Validators.required])],
      'passwords': fb.group({
        'password': [null, Validators.compose([Validators.required])],
        'confirmPassword': [null, Validators.compose([Validators.required])]
      }, {validator: this.areEqual})
    })
  }

  areEqual(group: any) {
    console.log('in are equal')
    if (group.controls.password.value && (group.controls.password.value == group.controls.confirmPassword.value)) {
        return null;
    }
    else {
      return {
          areEqual: false
        };
    }
  }

  register(value: any) {
    console.log(this.registerForm)
    console.log(value);
    // this.userService.register(value.firstName, value.lastName, value.email, value.passwords.password, value.passwords.confirmPassword).subscribe((result) => {
    //   if (result) {
    //     this.router.navigate(['']);
    //   }
    // });
  }
}
