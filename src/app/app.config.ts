import { ApplicationConfig } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, Routes, provideRouter, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routerOptions: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};
const routes: Routes = [{ path: '', component: HomeComponent }];

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(routerOptions);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, inMemoryScrollingFeature)],
};
