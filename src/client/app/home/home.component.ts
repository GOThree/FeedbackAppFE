import { Component } from '@angular/core';
import { GoogleService } from '../shared/globals/google';

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  providers: [GoogleService]
})

export class HomeComponent {

  constructor(private googleService: GoogleService) {
    console.log(googleService)
  }
}


