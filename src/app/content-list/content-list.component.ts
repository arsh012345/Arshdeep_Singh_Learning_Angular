import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentListItemComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent {
  contents = [
    { title: 'iphone-16', description: 'Latest iphone by apple',},
    { title: 'S24', description: 'Samsung flagship phone',},
    { title: 'Google pixel s8', description: 'Flagship phone by google',},
    { title: 'Oneplus 12', description: 'Flagship by oneplus',}
  ];
}
