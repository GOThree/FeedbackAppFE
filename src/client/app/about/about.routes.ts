import { Route } from '@angular/router';
import { AboutComponent } from './index';
import { AuthGuard } from '../shared/auth/auth.guard'

export const AboutRoutes: Route[] = [
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  }
];
