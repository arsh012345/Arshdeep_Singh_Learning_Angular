import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule, NgClass, NgForOf, NgIf} from "@angular/common";
import { ContentListComponent } from './content-list/content-list.component';
import {ContentListItemComponent} from "./content-list-item/content-list-item.component";
import { GadgetsService, IContent } from './services/gadgets.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgForOf, NgIf, ContentListComponent, ContentListItemComponent, NgClass, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent implements OnInit {
  selectedGadget: IContent | undefined;

  constructor(private gadgetsService: GadgetsService) {}

  ngOnInit(): void {
    const itemId = 1;
    this.gadgetsService.getGadgetById(itemId).subscribe(gadget => {
      this.selectedGadget = gadget;
    });
  }

  onGadgetSelected(gadget: IContent): void {
    this.selectedGadget = gadget;
  }
}




