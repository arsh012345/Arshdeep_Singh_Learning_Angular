import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Route} from "@angular/router";
import {HomeComponent} from "./app/home/home.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'modify-list-item', component: ModifyListItemComponent},
  { path: '**', component: PageNotFoundComponent }
];


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
