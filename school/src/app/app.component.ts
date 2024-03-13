import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, NgModelGroup, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StudentsComponent } from './pages/students/students.component';
import { MarksComponent } from './pages/marks/marks.component';
import { CardStudentsComponent } from './components/cards/card-students/card-students.component';
import { CardMarksComponent } from './components/cards/card-marks/card-marks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent, CommonModule, RouterOutlet, HttpClientModule, FormsModule, ReactiveFormsModule,
     RouterOutlet,HomeComponent, StudentsComponent, MarksComponent,  HeaderComponent, FooterComponent,
     CardStudentsComponent, CardMarksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'school';
}
