import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {studentsInfo} from "./studentsInfo";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  students: studentsInfo[] = [
    { id: 1, first_Name: 'John', last_Name: 'Doe', isAdmin: false, date_Born: new Date('2000-01-01') },
    { id: 2, first_Name: 'Arsh', last_Name: 'Khattra', isAdmin: true, date_Born: new Date('1998-12-25') },
    { id: 3, first_Name: 'Alice', last_Name: 'Johnson', isAdmin: false } //optional Date
  ];
}




