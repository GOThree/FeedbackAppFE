import {Injectable} from '@angular/core';
import {ProductListMock} from "./index";

@Injectable()
export class ProductListService{
  getProductList(id: number): Promise<any> {
    return Promise.resolve(ProductListMock);
  }
}
