import {Component} from '@angular/core';
import {MenuService} from "../shared/product-list/index";
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'review',
  templateUrl: 'review.component.html',
  providers: [MenuService]
})

export class ReviewComponent implements OnInit {
  constructor(private menuService:MenuService,
              private route:ActivatedRoute) {
  }

  getProductList(id: number):void {
    this.menuService.getProductList(id).then(menu => this.menu = menu);
  }

  ngOnInit():void {
    this.route.params.subscribe((params:Params) => {
      // the plus sign cast to number
      let id = +params['id'];

      // get the product list for the specific id
      this.getProductList(id)
    });
  }
}
