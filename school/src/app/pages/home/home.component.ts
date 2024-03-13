import { Component } from '@angular/core';
import { StudentsComponent } from '../students/students.component';
import { MarksComponent } from '../marks/marks.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, StudentsComponent, MarksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
