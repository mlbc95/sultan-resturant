import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
