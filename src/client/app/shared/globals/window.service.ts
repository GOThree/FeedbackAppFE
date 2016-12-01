import {Injectable} from '@angular/core';

@Injectable()
export class WindowService {

  private _window = window;

  constructor() {
  }

  get nativeWindow(): any {
    return this._window;
  }
}

