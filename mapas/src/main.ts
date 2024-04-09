import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if(!navigator.geolocation) {
  alert('Geolocation not available');
  throw new Error('Geolocation not available');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
