import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; // Import the HttpClientModule

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [HttpClientModule], // Add the HttpClientModule to the providers array
})
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));