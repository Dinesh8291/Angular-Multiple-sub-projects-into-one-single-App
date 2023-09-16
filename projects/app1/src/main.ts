import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { App1SharedModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(App1SharedModule)
  .catch(err => console.error(err));
