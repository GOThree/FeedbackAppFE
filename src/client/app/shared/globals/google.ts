import {Injectable} from "@angular/core";
import {WindowService} from './window.service';

@Injectable()
export class GoogleService {
  private _google: any;

  constructor(private windowService: WindowService) {
    this._google = windowService.nativeWindow['google'];
  }

  get placesService(): any {
    return this._google.maps.places;
  }

}
