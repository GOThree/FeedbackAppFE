import {Component, Input, OnChanges, SimpleChange } from '@angular/core'
import {ProductList} from "../../shared/models/product-list";

@Component({
  moduleId: module.id,
  selector: 'product-items',
  templateUrl: 'product-items.component.html'
})
export class ProductItemsComponent implements OnChanges{
  @Input() productList:ProductList;

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for(let propName in changes) {
      console.log(propName)
      this[propName] = changes[propName].currentValue;
    }
  }
}
