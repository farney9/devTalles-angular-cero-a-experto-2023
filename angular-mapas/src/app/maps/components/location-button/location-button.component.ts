import { Component } from '@angular/core';

@Component({
  selector: 'app-location-button',
  standalone: true,
  imports: [],
  templateUrl: './location-button.component.html',
  styleUrl: './location-button.component.sass'
})
export class LocationButtonComponent {



  goToMyLocation() {
    console.log('Going to my location');
  }

}
