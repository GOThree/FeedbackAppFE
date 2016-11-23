import {Component, OnChange, Output, EventEmitter,Subscription} from '@angular/core';
import {ReviewService} from "../review.service";
import {ProductListItem} from "../../shared/models/product-list-item";

@Component({
  moduleId: module.id,
  selector: 'items-review',
  templateUrl: 'items-review.component.html'
})
export class ItemsReviewComponent implements OnChange {
  @Output() items = new EventEmitter();

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

      // emit the change in listItems
      this.items.emit(this.listItems);
    })
  }

  // public methods
  rate(listItem:ProductListItem):void {
    this.reviewService.rateItemFromItemsReview(listItem);
  }

  removeItem(listItem: ProductListItem):void {
    // set the rating to 0 so the Review Component
    // can be updated
    listItem.rating = 0;
    this.rate(listItem);

    // remove the item from the current list
    var index = this.listItems.indexOf(listItem);
    this.listItems.splice(index, 1);
  }
}
