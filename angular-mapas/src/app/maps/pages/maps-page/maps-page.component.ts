import { Component, inject } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../components/loading/loading.component';
import { MapViewComponent } from '../../components/map-view/map-view.component';
import { LogoIconComponent } from 'src/app/maps/components/logo-icon/logo-icon.component';
import { LocationButtonComponent } from 'src/app/maps/components/location-button/location-button.component';

@Component({
  selector: 'app-maps-page',
  standalone: true,
  imports: [CommonModule, LoadingComponent, MapViewComponent, LogoIconComponent, LocationButtonComponent],
  templateUrl: './maps-page.component.html',
  styleUrl: './maps-page.component.sass'
})
export class MapsPageComponent {
  private placesService = inject(PlacesService);

  get isUserLocationReady(): boolean {
    return this.placesService.isUserLocationReady;
  }

}
