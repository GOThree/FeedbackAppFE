import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ba-content-top',
  styleUrls: ['baContentTop.css'],
  templateUrl: 'baContentTop.html'
})
export class BaContentTop {

  public activePageTitle:string = '';

  constructor() { }
}
