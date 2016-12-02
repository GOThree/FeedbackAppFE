import {NgModule} from '@angular/core';

import {LocationComponent} from './location.component';
import {SharedModule} from "../shared/shared.module/";
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [LocationComponent],
  declarations: [LocationComponent],
  providers: [],
})
export class LocationModule {
}
