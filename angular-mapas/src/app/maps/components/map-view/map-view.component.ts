import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { PlacesService } from '../../services';
import { ControlComponent, DraggableDirective, FeatureComponent, GeoJSONSourceComponent, LayerComponent, MapComponent, MarkerComponent, } from '@maplibre/ngx-maplibre-gl';
import { environment } from '@environments/environment.development';
import { NgIf } from '@angular/common';
import { FloatingCardComponent } from 'src/app/maps/components/floating-card/floating-card.component';
import { MapMouseEvent, Marker } from 'maplibre-gl';


@Component({
  selector: 'app-map-view',
  standalone: true,
  // templateUrl: './map-view.component.html',
  template: `
  <mgl-map
    class="map-container"
    [style]="'https://api.maptiler.com/maps/streets/style.json?key=' + key"
    [zoom]="[currentZoom]"
    [center]="placesService.userLocation"
    [preserveDrawingBuffer]="true">

<!--     <mgl-geojson-source id="point">
      <mgl-feature
        [properties]=""
        [geometry]="{
          type: 'Point',
          coordinates: [coordinates?.[0] ?? 0, coordinates?.[1] ?? 0]
        }"
        [mglDraggable]="targetLayer"
        (featureDragStart)="onDragStart($event)"
        (featureDragEnd)="onDragEnd($event)"
        (featureDrag)="onDrag($event)"
        >
      </mgl-feature>
    </mgl-geojson-source> -->
<!--     <mgl-layer
      #targetLayer
      id="point"
      type="circle"
      source="point"
      [paint]="layerPaint"
      (layerMouseEnter)="changeColor(color)"
      (layerMouseLeave)="changeColor(color)"
      >
    </mgl-layer> -->

    <mgl-marker
      [lngLat]="[coordinates?.[0] ?? 0, coordinates?.[1] ?? 0]"
      [draggable]="true"
      (markerDrag)="onDrag($event)"
      [color]="coordinates ? color : 'blue'"
      >
    </mgl-marker>
    <mgl-control *ngIf="coordinates" position="bottom-left">
      <app-floating-card>
        <span class="form-label my-2">Zoom: {{ currentZoom }}
        <br>
        <strong>Lng:</strong> {{ coordinates[0] }}
        <br>
        <strong>Lat:</strong> {{ coordinates[1] }}
      </span>
      </app-floating-card>
    </mgl-control>
  </mgl-map>
  `,
  styleUrl: './map-view.component.sass',
  imports: [
    MapComponent,
    GeoJSONSourceComponent,
    FeatureComponent,
    DraggableDirective,
    LayerComponent,
    MarkerComponent,
    NgIf,
    ControlComponent,
    FloatingCardComponent,
  ],

})
export class MapViewComponent implements OnInit, AfterViewInit {

  key = environment.API_KEY;
  coordinates?: number[];
  currentZoom = 14;
  color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
  layerPaint = {
    'circle-radius': 10,
    'circle-color': this.color,
  };

  public placesService = inject(PlacesService);

  ngOnInit() {
    this.coordinates = this.placesService.userLocation;
    console.log(this.coordinates);
  }

  ngAfterViewInit() {
/*     this.coordinates = this.placesService.userLocation;
    console.log(this.coordinates); */
  }


  onDragStart(event: MapMouseEvent) {
    // console.log('onDragStart', event);
  }

/*   onDrag(event: MapMouseEvent) {
    // console.log('onDrag', event);
    this.coordinates = event.lngLat.toArray();
  } */

  onDragEnd(event: MapMouseEvent) {
    // console.log('onDragEnd', event);
  }

  onDrag(marker: Marker) {
    this.coordinates = marker.getLngLat().toArray();
  }

  changeColor(color: string) {
    this.layerPaint = { ...this.layerPaint, 'circle-color': color };
  }

}
