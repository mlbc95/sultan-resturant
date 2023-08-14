import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

declare const sal: () => any;

bootstrapApplication(AppComponent, appConfig)
  .then((appRef) => {
    appRef.isStable.subscribe((value) => {
      if (value) {
        sal();
      }
    });
  })
  .catch((err) => console.error(err));
