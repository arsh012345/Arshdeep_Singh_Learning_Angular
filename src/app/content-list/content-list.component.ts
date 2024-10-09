import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListItemComponent } from "../content-list-item/content-list-item.component";
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

  constructor(private gadgetsService: GadgetsService) {}

  ngOnInit(): void {
    this.gadgetsService.getGadgets().subscribe(gadgets => {
      this.gadgets = gadgets;
    });
  }

  addGadget(newGadget: IContent): void {
    this.gadgetsService.addGadget(newGadget).subscribe(updatedGadgets => {
      this.gadgets = updatedGadgets;
    });
  }

  updateGadget(updatedGadget: IContent): void {
    this.gadgetsService.updateGadget(updatedGadget).subscribe(updatedGadgets => {
      this.gadgets = updatedGadgets;
    });
  }

  deleteGadget(id: number): void {
    this.gadgetsService.deleteGadget(id).subscribe(removedItem => {
      if (removedItem) {
        this.gadgets = this.gadgets.filter(gadget => gadget.id !== id);
      }
    });
  }
}
