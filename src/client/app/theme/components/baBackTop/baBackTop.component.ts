import { Component, ViewChild, HostListener, Input, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'ba-back-top',
  styleUrls: ['./baBackTop.css'],
  template: `
    <i #baBackTop class="fa fa-angle-up back-top ba-back-top" title="Back to Top"></i>
  `
})
export class BaBackTop {

  @Input() position:number = 400;
  @Input() showSpeed:number = 500;
  @Input() moveSpeed:number = 1000;

  @ViewChild('baBackTop') private _selector:ElementRef;

  ngAfterViewInit () {
    this._onWindowScroll();
  }

  @HostListener('click')
  _onClick():boolean {
    $('html, body').animate({scrollTop:0}, {duration:this.moveSpeed});
    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll():void {
    let el = this._selector.nativeElement;
    window.scrollY > this.position ? $(el).fadeIn(this.showSpeed) : $(el).fadeOut(this.showSpeed);
  }
}
