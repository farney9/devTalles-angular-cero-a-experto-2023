import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

if(!navigator.geolocation) {
  alert('Geolocation not available');
  throw new Error('Geolocation not available');
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
