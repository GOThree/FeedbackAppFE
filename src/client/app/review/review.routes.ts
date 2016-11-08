import {Route} from '@angular/router';
import {ReviewComponent} from "./review.component";

export const ReviewRoutes: Route[] = [
  {
    path: 'review/:id',
    component: ReviewComponent
  }
];
