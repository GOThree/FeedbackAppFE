import {NgModule} from '@angular/core'
import {CategoriesPaneComponent} from "./categories/categories-pane.component";
import {ReviewComponent} from "./review.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [
    CategoriesPaneComponent,
    ReviewComponent
  ],
  exports: [
    CategoriesPaneComponent,
    ReviewComponent
  ]
})
export class ReviewModule {}
