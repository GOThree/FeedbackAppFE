import {Component, ViewEncapsulation} from '@angular/core';
import { UserService } from '../../../shared/auth/user.service'
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ba-page-top',
  styleUrls: ['baPageTop.css'],
  templateUrl: 'baPageTop.html',
  encapsulation: ViewEncapsulation.None
})
export class BaPageTop {

  public isScrolled:boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  public scrolledChanged(isScrolled: any) {
    this.isScrolled = isScrolled;
  }

  public logout() : void {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
