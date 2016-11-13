import {Component, Input, OnChanges, SimpleChange} from '@angular/core'
import {ProductList, ProductCategory} from "../../shared/models/index";
import {FormControl} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'product-items',
  templateUrl: 'product-items.component.html'
})
export class ProductItemsComponent implements OnChanges, OnInit {
  @Input() productList:ProductList;

  term = new FormControl();
  private _categories:ProductCategory[];

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
          if(!category.cachedItems) {
            category.cachedItems = category.items.slice();
          }

          category.items = category.cachedItems.filter(function(item) {
            return item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase());
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
