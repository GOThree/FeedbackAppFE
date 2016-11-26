import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { NgaModule } from '../theme/index';

@NgModule({
  imports: [CommonModule, SharedModule, NgaModule],
  declarations: [HomeComponent],
})
export class HomeModule { }
