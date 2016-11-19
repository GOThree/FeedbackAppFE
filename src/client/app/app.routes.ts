import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { LoginRoutes } from './login/index';
import { RegisterRoutes } from './register/index';
import { ReviewRoutes } from "./review/index";
import { ForgotPasswordRoutes } from "./forgotpassword/index";

export const routes: Routes = [
  ...HomeRoutes,
  ...LoginRoutes,
  ...ReviewRoutes,
  ...RegisterRoutes,
  ...ForgotPasswordRoutes
];
