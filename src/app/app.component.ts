import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgClass, NgForOf, NgIf, DatePipe,UpperCasePipe,CurrencyPipe } from "@angular/common";
import { RouterModule } from '@angular/router';
import { Employee } from './data/mock-content';
import { employee } from './data/employee.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgForOf, NgIf, NgClass, CommonModule, DatePipe,UpperCasePipe,CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  employees: employee[] = Employee;
}
