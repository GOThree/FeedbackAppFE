import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ProductListItem} from "../shared/models/index";

@Injectable()
export class ReviewService {

  // sources
  private itemsRatedFromProductList = new Subject<ProductListItem>();
  private itemsRatedFromItemsReview = new Subject<ProductListItem>();

  // public observables
  itemsFromProductList$ = this.itemsRatedFromProductList.asObservable();
  itemsFromItemsReview$ = this.itemsRatedFromItemsReview.asObservable();

  rateItemFromProductList(item:ProductListItem) {
    this.itemsRatedFromProductList.next(item)
  }

  rateItemFromItemsReview(item:ProductListItem) {
    this.itemsRatedFromItemsReview.next(item)
  }

}
