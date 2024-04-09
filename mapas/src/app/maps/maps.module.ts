import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsPageComponent } from './pages/maps-page/maps-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MapViewComponent } from './components/map-view/map-view.component';



@NgModule({
  declarations: [
    MapsPageComponent,
    LoadingComponent,
    MapViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapsPageComponent
  ]
})
export class MapsModule { }
