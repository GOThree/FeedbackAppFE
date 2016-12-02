import {Directive, Output, EventEmitter, ElementRef, Input, Renderer, HostListener, OnInit} from '@angular/core';
import {GoogleService} from "../globals/index";
import { NgControl } from "@angular/forms";

@Directive({
  selector: '[ac-places]',
  providers: [GoogleService]
})
export class PlacesDirective implements OnInit {
  @Output() place: EventEmitter<any> = new EventEmitter<any>();
  private autocomplete: any;

  constructor(private el: ElementRef,
              private  googleService: GoogleService,
              private control: NgControl) {
  }

  ngOnInit() {
    let element = this.el.nativeElement;
    this.autocomplete = new this.googleService.placesService.Autocomplete(element);
    this.autocomplete.addListener('place_changed', () => {
      var place = this.autocomplete.getPlace();

      this.control.control.setValue(place, {emitModelToViewChange: false});
      console.log("Control: ", this.control);

      this.place.emit(place);
    });
  }
}

