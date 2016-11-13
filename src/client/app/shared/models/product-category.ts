import {ProductListItem} from "./product-list-item";
export class ProductCategory {
  public cachedItems:ProductListItem[];

  constructor(public title:string, public items:ProductListItem[]) {
  }
}
