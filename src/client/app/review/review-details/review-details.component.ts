import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VALIDATION_REGEX} from '../../global.vars'
import {ProductListItem} from "../../shared/models/product-list-item";


@Component({
  moduleId: module.id,
  selector: 'review-details',
  templateUrl: 'review-details.component.html',
  styleUrls: ['review-details.component.css']
})
export class ReviewDetailsComponent {
  form: FormGroup;
  items: ProductListItem[] = [];
  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  public submit(formValue: any) {
    console.log("Form values: ", formValue);
    console.log("Items: ", this.items);
  }

  private buildForm() {
    let emailRegex = VALIDATION_REGEX.email;

    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.pattern(emailRegex), Validators.required])],
      'comment': [null, null],
      'receivePromotions': [true, null]
    })
  }
}
