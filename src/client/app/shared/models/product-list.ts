import {ProductListItem} from "./product-list-item";

export class ProductList {
  constructor(public items:ProductListItem[], public title:string = "Test") {
  }
}
