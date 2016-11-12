import {NgModule} from '@angular/core'
import {CategoriesPaneComponent} from "./categories/categories-pane.component";
import {ReviewComponent} from "./review.component";
import {SharedModule} from "../shared/shared.module";
import {ProductItemsComponent} from "./product-items/product-items.component";
import {ReviewDetailsComponent} from "./review-details/review-details.component";
import {ItemsReviewComponent} from "./items-review/items-review.component";

@NgModule({
  imports: [SharedModule],
  declarations: [
    CategoriesPaneComponent,
    ReviewComponent,
    ProductItemsComponent,
    ReviewDetailsComponent,
    ItemsReviewComponent
  ],
  exports: [
    CategoriesPaneComponent,
    ReviewComponent,
    ProductItemsComponent,
    ReviewDetailsComponent,
    ItemsReviewComponent
  ]
})
export class ReviewModule {}
