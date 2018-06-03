import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Kinvey } from 'kinvey-angular2-sdk';

Kinvey.init({
  appKey: 'kid_SJ8Dd5lem',
  appSecret: '04f3cfabca71499a97e6de4ecc246e92'
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
