import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data/data.service';
import { IContent } from '../data/mock-content';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  items: IContent[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.dataService.getItems().subscribe((data: IContent[]) => {
      this.items = data;
    });
  }

  editItem(id: number): void {
    this.router.navigate(['/modify', id]);
  }

  deleteItem(id: number): void {
    this.dataService.deleteItem(id);
    this.loadItems();
  }
}
