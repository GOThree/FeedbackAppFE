import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core'
import {ProductList, ProductCategory, ProductListItem} from "../../shared/models/index";
import {FormControl} from '@angular/forms';
import { Subscription }   from 'rxjs/Subscription';
import {ReviewService} from "../review.service";

@Component({
  moduleId: module.id,
  selector: 'product-items',
  templateUrl: 'product-items.component.html'
})
export class ProductItemsComponent implements OnChanges, OnInit {
  @Input() productList:ProductList;

  // public props
  term = new FormControl();
  subscription: Subscription;

  // private props
  private _categories:ProductCategory[];

  // public methods
  rate(listItem:ProductListItem):void {
    this.reviewService.rateItemFromProductList(listItem);
  }

  constructor(private reviewService: ReviewService) {
    var self = this;
    this.subscription = this.reviewService.itemsFromItemsReview$.subscribe(value => {
      self.productList.categories.map((category) => {
        var listItem = category.items.filter(item => {
          return item.id ===  value.id;
        });

        listItem = value;
      })
    });
  }

  ngOnInit() {
    this.term.valueChanges
      .subscribe(value => {
        // cache into _categories since the
        // productList.categories is going to be filtered
        if (!this._categories) {
          this._categories = this.productList.categories.slice();
        }

        // filter items that the title contains the value.
        this.productList.categories = this._categories.map(function (category) {
          if (!category.cachedItems) {
            category.cachedItems = category.items.slice();
          }

          category.items = category.cachedItems.filter(function (item) {
            return item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
              || item.description.toLocaleLowerCase().includes(value.toLocaleLowerCase());
          })

          return category;
        });
      });
  }

  ngOnChanges(changes:{[propKey:string]:SimpleChange}) {
    for (let propName in changes) {
      this[propName] = changes[propName].currentValue;
    }
  }
}
