import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';

@Component({
  selector: 'ba-card',
  // styles: [require('./baCard.scss')],
  styleUrls: ['baCard.css'],
  template: './baCard.html',
  encapsulation: ViewEncapsulation.None
})
export class BaCard {
  @Input() title:String;
  @Input() baCardClass:String;
}