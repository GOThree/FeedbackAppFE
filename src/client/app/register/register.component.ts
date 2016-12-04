import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from './../shared/auth/user.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { VALIDATION_REGEX } from '../global.vars'

@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm : FormGroup;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder, private toastr: ToastsManager) {
    let emailRegex = VALIDATION_REGEX.email;
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
    this.userService.register(value.firstName, value.lastName, value.email, value.passwords.password, value.passwords.confirmPassword)
    .subscribe(
      data => {
        this.toastr.success('Successful registration');
        this.router.navigate(['/login']);
      },
      err => {
        this.toastr.error(err)
      }
    );
  }
}
