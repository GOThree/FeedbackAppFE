import {NgModule} from '@angular/core'
import {CategoriesPaneComponent} from "./categories/categories-pane.component";
import {ReviewComponent} from "./review.component";
import {SharedModule} from "../shared/shared.module";
import {MenuItemsComponent} from "./menu-items/menu-items.component";
import {ReviewDetailsComponent} from "./review-details/review-details.component";

@NgModule({
  imports: [SharedModule],
  declarations: [
    CategoriesPaneComponent,
    ReviewComponent,
    MenuItemsComponent,
    ReviewDetailsComponent
  ],
  exports: [
    CategoriesPaneComponent,
    ReviewComponent,
    MenuItemsComponent,
    ReviewDetailsComponent
  ]
})
export class ReviewModule {}
