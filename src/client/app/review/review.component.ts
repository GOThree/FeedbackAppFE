import {Component} from '@angular/core';
import {MenuService} from "../shared/menu/index";

@Component({
  moduleId: module.id,
  selector: 'review',
  templateUrl: 'review.component.html',
  providers: [MenuService]
})

export class ReviewComponent implements OnInit {
  constructor(private menuService:MenuService) {
  }

  getMenu():void {
    this.menuService.getMenu().then(menu => this.menu = menu);
  }
  
  ngOnInit():void {
    this.getMenu();
  }
}
