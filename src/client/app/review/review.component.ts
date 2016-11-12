import {Component} from '@angular/core';
import {ProductListService} from "../shared/product-list/index";
import {ActivatedRoute, Params} from '@angular/router'
import {ProductList} from "../shared/models/product-list";

@Component({
  moduleId: module.id,
  selector: 'review',
  templateUrl: 'review.component.html',
  providers: [ProductListService]
})

export class ReviewComponent implements OnInit {
  productList:ProductList
  test:string = "My test";
  constructor(private menuService:ProductListService,
              private route:ActivatedRoute) {
  }

  getProductList(id: number):void {
    this.menuService.getProductList(id).then(productList => {
      this.productList = productList});
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
