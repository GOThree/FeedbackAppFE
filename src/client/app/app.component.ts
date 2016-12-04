import { Component } from '@angular/core';
import { Config } from './shared/index';
import './operators';
import { UserService } from './shared/auth/user.service';

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor(private userService: UserService) { }
}
