import {Component} from '@angular/core';

@Component({
  selector: 'ba-content-top',
  styleUrls: ['./baContentTop.css'],
  template: './baContentTop.html'
})
export class BaContentTop {

  public activePageTitle:string = '';

  constructor() { }
}
