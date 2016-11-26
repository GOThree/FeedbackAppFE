import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ba-page-top',
  styleUrls: ['baPageTop.css'],
  templateUrl: 'baPageTop.html',
  encapsulation: ViewEncapsulation.None
})
export class BaPageTop {

  public isScrolled:boolean = false;

  constructor() { }

  public scrolledChanged(isScrolled: any) {
    this.isScrolled = isScrolled;
  }
}
