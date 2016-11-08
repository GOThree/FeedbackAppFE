import {Injectable} from '@angular/core';
import {MENU} from "./index";

@Injectable()
export class MenuService{
  getProductList(id: number): Promise<any> {
    MENU.push(id);
    return Promise.resolve(MENU);
  }
}
