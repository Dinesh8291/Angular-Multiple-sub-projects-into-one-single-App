import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { App2SharedModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(App2SharedModule)
  .catch(err => console.error(err));
