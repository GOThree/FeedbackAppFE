import { Component } from '@angular/core';
import { Config } from './shared/index';
import './operators';
import { UserService } from './shared/auth/user.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor(private userService: UserService, private router: Router) { }

  logout (){
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
