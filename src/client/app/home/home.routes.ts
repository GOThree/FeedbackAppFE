import { Route } from '@angular/router';
import { HomeComponent } from './index';
import { AuthGuard } from '../shared/auth/auth.guard'

export const HomeRoutes: Route[] = [
  { 
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  }
];
