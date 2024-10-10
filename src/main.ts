import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Route} from "@angular/router";

const routes: Route[] = [
  { path: '', component: "" },
  { path: 'modify-list-item', component: "" },
  { path: '**', component: PageNotFoundComponent }
];


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
