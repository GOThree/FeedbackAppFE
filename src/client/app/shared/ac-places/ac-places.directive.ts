import {Directive, ElementRef, Input, Renderer} from '@angular/core';
import {GoogleService} from "../globals/index";

@Directive({
  selector: '[ac-places]',
  providers: [GoogleService]
})
export class PlacesDirective {
  constructor(el: ElementRef, renderer: Renderer, googleService: GoogleService) {
    let element = el.nativeElement;
    let autocomplete = new googleService.placesService.Autocomplete(element);
  }
}
