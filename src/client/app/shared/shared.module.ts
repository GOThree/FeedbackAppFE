import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {AutoCompleteComponent} from "./auto-complete/auto-complete.component";
import {EmailComponent} from "./email/email.component";
import {PhoneComponent} from "./phone/phone.component";
import {CommentComponent} from "./comment/comment.component";
import {WindowService} from "./globals/window.service";
import {GoogleService} from "./globals/google";
import {PlacesDirective} from "./ac-places/ac-places.directive";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AutoCompleteComponent,
    EmailComponent, PhoneComponent,
    CommentComponent, PlacesDirective],
  exports: [CommonModule, FormsModule,
    RouterModule, AutoCompleteComponent,
    EmailComponent, PhoneComponent,
    CommentComponent, PlacesDirective]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [WindowService, GoogleService]
    };
  }
}
