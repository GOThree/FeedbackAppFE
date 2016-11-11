import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { LoginRoutes } from './login/index';
import {ReviewRoutes} from "./review/index";
import {PageNotFoundComponent} from "./shared/page-not-found/page-not-found.component";

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...LoginRoutes,
  ...ReviewRoutes,
  { path: '**', component: PageNotFoundComponent }
];
