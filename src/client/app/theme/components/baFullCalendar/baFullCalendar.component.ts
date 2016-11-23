import {Component, ViewChild, ViewEncapsulation, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import './baFullCalendar.loader';

@Component({
  selector: 'ba-full-calendar',
  template: './baFullCalendar.html',
  encapsulation: ViewEncapsulation.None,
})
export class BaFullCalendar {

  @Input() baFullCalendarConfiguration:Object;
  @Input() baFullCalendarClass:string;
  @Output() onCalendarReady = new EventEmitter<any>();

  @ViewChild('baFullCalendar') private _selector:ElementRef;

  ngAfterViewInit() {
    let calendar = jQuery(this._selector.nativeElement).fullCalendar(this.baFullCalendarConfiguration);
    this.onCalendarReady.emit(calendar);
  }
}
