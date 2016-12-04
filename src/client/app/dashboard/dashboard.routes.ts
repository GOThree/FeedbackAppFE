import { Route } from '@angular/router';
import { DashboardComponent } from './index';
import { AuthGuard } from '../shared/auth/auth.guard'

export const DashboardRoutes: Route[] = [
  { 
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];
