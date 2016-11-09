import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { LoginRoutes } from './login/index';
import { RegisterRoutes } from './register/index';
import {ReviewRoutes} from "./review/index";

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...LoginRoutes,
  ...ReviewRoutes,
  ...RegisterRoutes
];
