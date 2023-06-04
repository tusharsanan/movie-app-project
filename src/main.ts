import { AppComponent } from './app/app.component';

import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app/routes';
import { SearchService } from './app/services/search.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    importProvidersFrom(HttpClientModule),
    SearchService,
  ],
}).catch((err) => console.error(err));
