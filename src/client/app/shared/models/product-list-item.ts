import {ProductCategory} from "./product-category";

export class ProductListItem {
  constructor(public title:string, public description:string, public category:ProductCategory) {
  }
}
