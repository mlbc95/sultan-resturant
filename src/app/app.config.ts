import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, Routes, provideRouter, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuDetailComponent } from "./menu-detail/menu-detail.component";

const routerOptions: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};
const routes: Routes = [{ path: '', component: HomeComponent },
{ path: "menu-details", component: MenuDetailComponent }];

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(routerOptions);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, inMemoryScrollingFeature), provideHttpClient()],
};
