import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgClass, NgForOf, NgIf, DatePipe,UpperCasePipe,CurrencyPipe } from "@angular/common";
import { RouterModule } from '@angular/router';
import { Employee } from './data/mock-content';
import { employee } from './data/employee.model';
import {HHighlightDirective} from "./h-highlight.directive";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgForOf, MatCard, MatCardTitle, NgIf, NgClass, HHighlightDirective, CommonModule, DatePipe, UpperCasePipe, CurrencyPipe, MatCardContent, MatListItem, MatList, MatIcon],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  employees: employee[] = Employee;
}
