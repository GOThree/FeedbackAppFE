import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ba-card',
  templateUrl: 'baCard.html',
})
export class BaCard {
  @Input() title:String;
  @Input() baCardClass:String;
}
