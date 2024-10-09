import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentListItemComponent} from "../content-list-item/content-list-item.component";
import { mockContent } from '../data/mock-content';
import { GadgetsService } from '../services/gadgets.service';

export interface IContent {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentListItemComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.css'
})
export class ContentListComponent {
  gadgets: IContent[] = [];

  constructor(private gadgetsService: GadgetsService) {
    this.gadgets = this.gadgetsService.getGadgets();
  }
}
