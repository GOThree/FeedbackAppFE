import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NgaModule } from '../theme/index';

@NgModule({
  imports: [CommonModule, SharedModule, NgaModule],
  declarations: [DashboardComponent],
})
export class DashboardModule { }
