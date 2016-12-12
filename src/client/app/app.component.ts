import { Component, ViewContainerRef } from '@angular/core';
import { Config } from './shared/index';
import './operators';
import { UserService } from './shared/auth/user.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})

export class AppComponent {
  name: string;

  constructor(private userService: UserService, private router: Router, vRef: ViewContainerRef, public toastr: ToastsManager) {
    this.toastr.setRootViewContainerRef(vRef);
    this.name = userService.name()
  }

  logout (){
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
