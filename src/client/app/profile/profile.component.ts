import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from './../shared/auth/user.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { VALIDATION_REGEX } from '../global.vars'

@Component({
  moduleId: module.id,
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  changePasswordForm : FormGroup;
  name : string;
  familyName : string;
  email : string;

  constructor(private userService: UserService, private fb: FormBuilder, private toastr: ToastsManager) {
     this.name = localStorage.getItem('name');
     this.familyName = localStorage.getItem('family_name');
     this.email = localStorage.getItem('email');
     this.changePasswordForm = fb.group({
       'currentPassword' : [null, Validators.compose([Validators.required])],
       'newPassword' : [null, Validators.compose([Validators.required])],
     })
  }

  changePassword(value: any) {
    this.userService.changePassword(value.currentPassword, value.newPassword).
      subscribe(
       data => {
         this.toastr.success('Change Password Successful')
       },
       err => {
         this.toastr.error(err);
       }
     );
  }
}
