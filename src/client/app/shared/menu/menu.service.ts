import {Injectable} from '@angular/core';
import {MENU} from "./index";

@Injectable()
export class MenuService{
  getMenu(): Promise<any> {
    return Promise.resolve(MENU);
  }
}
