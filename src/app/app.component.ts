import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {studentsInfo} from "./studentsInfo";
import {NgForOf, NgIf} from "@angular/common";
import { ContentListComponent } from './content-list/content-list.component';
import {ContentListItemComponent} from "./content-list-item/content-list-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, ContentListComponent, ContentListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {


}




