import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ba-page-top',
  styleUrls: ['baPageTop.css'],
  template: 'baPageTop.html',
  encapsulation: ViewEncapsulation.None
})
export class BaPageTop {

  public isScrolled:boolean = false;

  constructor() { }

  public scrolledChanged(isScrolled: any) {
    this.isScrolled = isScrolled;
  }
}
