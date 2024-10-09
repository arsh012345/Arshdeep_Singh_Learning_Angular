import { Component, Input } from '@angular/core';
import { IContent } from '../services/gadgets.service';

@Component({
  selector: 'app-content-list-item',
  standalone: true,
  templateUrl: './content-list-item.component.html',
  styleUrls: ['./content-list-item.component.css']
})
export class ContentListItemComponent {
  @Input() gadget!: IContent; // Declared an input property
}
