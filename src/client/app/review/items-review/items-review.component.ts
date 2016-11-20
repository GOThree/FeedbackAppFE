import {Component, OnChange} from '@angular/core';
import {ReviewService} from "../review.service";
import {ProductListItem} from "../../shared/models/product-list-item";

@Component({
  moduleId: module.id,
  selector: 'items-review',
  templateUrl: 'items-review.component.html'
})
export class ItemsReviewComponent implements OnChange {
  subscription:Subscription;
  private listItems:ProductListItem[] = [];

  constructor(private reviewService:ReviewService) {
    var self = this;
    this.subscription = this.reviewService.itemsFromProductList$.subscribe(value=> {
      var broadcastedItem = this.listItems.find(item => {
        return item.id == value.id;
      });

      if (!broadcastedItem) {
        this.listItems.push(value);
      }
    })
  }

  // public methods
  rate(listItem:ProductListItem):void {
    this.reviewService.rateItemFromItemsReview(listItem);
  }
}
