import {Component} from '@angular/core';

@Component({
  selector: 'ba-content-top',
  styles: [require('./baContentTop.scss')],
  template: require('./baContentTop.html'),
})
export class BaContentTop {

  public activePageTitle:string = '';

  constructor() { }
}
