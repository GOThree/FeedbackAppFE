import {Component, Input, OnChanges, SimpleChange} from '@angular/core'
import {ProductList, ProductListItem} from "../../shared/models/index";
import {FormControl} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'product-items',
  templateUrl: 'product-items.component.html'
})
export class ProductItemsComponent implements OnChanges, OnInit {
  @Input() productList:ProductList;

  term = new FormControl();
  private _items:ProductListItem[];

  ngOnInit() {
    this.term.valueChanges
      .subscribe(value => {
        // cache into _items since the
        // productList.items gonna be filtered
        if (!this._items) {
          this._items = this.productList.items.slice();
        }

        // filter items that the title contains the value.
        this.productList.items = this._items.filter(function (obj) {
          return obj.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        });
      });
  }

  ngOnChanges(changes:{[propKey:string]:SimpleChange}) {
    for (let propName in changes) {
      this[propName] = changes[propName].currentValue;
    }
  }
}
