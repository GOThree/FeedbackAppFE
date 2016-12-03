import {Component, OnInit} from '@angular/core';
import {ProductListService} from "../shared/product-list/index";
import {ActivatedRoute, Params} from '@angular/router'
import {ProductList} from "../shared/models/product-list";
import {ReviewService} from "./review.service";
import {Rating} from "ng2-rating"

@Component({
  moduleId: module.id,
  selector: 'review',
  templateUrl: 'review.component.html',
  providers: [ProductListService, ReviewService],
  directives: [Rating]
})

export class ReviewComponent implements OnInit {
  productList: ProductList;
  starsCount: number;

  constructor(private menuService: ProductListService,
              private route: ActivatedRoute,
              private reviewService: ReviewService) {
  }

  getProductList(id: number): void {
    this.menuService.getProductList(id).then(productList => {
      this.productList = productList
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      // the plus sign cast to number
      let id = +params['id'];

      // get the product list for the specific id
      this.getProductList(id)
    });
  }
}
