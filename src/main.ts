import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Route} from "@angular/router";


import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Route[] = [


  { path: '**', component: PageNotFoundComponent }
];


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
