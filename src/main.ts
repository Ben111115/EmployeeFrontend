import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { appRouterProviders } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';



bootstrapApplication(AppComponent, {
  providers: [
  ...appRouterProviders,
  importProvidersFrom(HttpClientModule)
  ]
}).catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));