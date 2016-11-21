import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {AutoCompleteComponent} from "./auto-complete/auto-complete.component";
import {EmailComponent} from "./email/email.component";
import {PhoneComponent} from "./phone/phone.component";
import {CommentComponent} from "./comment/comment.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AutoCompleteComponent, EmailComponent, PhoneComponent, CommentComponent],
  exports: [CommonModule, FormsModule, RouterModule, AutoCompleteComponent, EmailComponent, PhoneComponent, CommentComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
