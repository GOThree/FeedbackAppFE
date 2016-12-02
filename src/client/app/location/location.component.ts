import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'location-component',
  templateUrl: 'location.component.html',
})
export class LocationComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      phone: [],
      address: [],
      picture: [],
      activeProductList: []
    });
  }
}
