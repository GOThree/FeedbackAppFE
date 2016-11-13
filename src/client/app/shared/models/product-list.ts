import {ProductListItem} from "./product-list-item";
import {ProductCategory} from "./product-category";

export class ProductList {
  constructor(public title:string = "Test", public categories:ProductCategory[]) {
  }
}
