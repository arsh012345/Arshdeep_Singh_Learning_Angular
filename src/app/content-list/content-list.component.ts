import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListItemComponent } from '../content-list-item/content-list-item.component';
import { GadgetsService, IContent } from '../services/gadgets.service';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentListItemComponent],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  gadgets: IContent[] = [];

  @Output() gadgetSelected = new EventEmitter<IContent>();

  constructor(private gadgetsService: GadgetsService) {}

  ngOnInit(): void {
    this.gadgetsService.getGadgets().subscribe(gadgets => {
      this.gadgets = gadgets;
    });
  }

  onSelect(gadget: IContent): void {
    this.gadgetSelected.emit(gadget);
  }
}
