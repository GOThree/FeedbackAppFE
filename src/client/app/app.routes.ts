import { Routes } from '@angular/router';

import { DashboardRoutes } from './dashboard/index';
import { LoginRoutes } from './login/index';
import { RegisterRoutes } from './register/index';
import { ReviewRoutes } from "./review/index";
import { ForgotPasswordRoutes } from "./forgotpassword/index";
import { ProfileRoutes } from "./profile/index";

export const routes: Routes = [
  ...DashboardRoutes,
  ...LoginRoutes,
  ...ReviewRoutes,
  ...RegisterRoutes,
  ...ForgotPasswordRoutes,
  ...ProfileRoutes
];
