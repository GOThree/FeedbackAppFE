import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ba-page-top',
  styleUrls: ['baPageTop.css'],
  templateUrl: 'baPageTop.html',
})
export class BaPageTop {

  public isScrolled:boolean = false;

  constructor() { }

  public scrolledChanged(isScrolled: any) {
    this.isScrolled = isScrolled;
  }
}
