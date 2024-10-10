import { Component, Input } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import { IContent } from '../services/gadgets.service';
import {mockContent} from "../data/mock-content";


@Component({
  selector: 'app-content-list-item',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.css']

})
export class ContentListItemComponent {
  @Input() gadget!: IContent; // Declared an input property
  protected readonly mockContent = mockContent;
}
