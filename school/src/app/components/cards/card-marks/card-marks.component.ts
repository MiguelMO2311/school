import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { SchoolService } from '../../../school.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MarksComponent } from '../../../pages/marks/marks.component';

import { Marks } from '../../../models/marks';
import { StudentsComponent } from '../../../pages/students/students.component';
import { Teachers } from '../../../models/teachers';
import { Students } from '../../../models/students';

@Component({
  selector: 'app-card-marks',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MarksComponent, FormsModule, RouterModule, StudentsComponent],
  templateUrl: './card-marks.component.html',
  styleUrl: './card-marks.component.css'
})
export class CardMarksComponent {
subject: any;
date: any;



  constructor(private readonly schoolService: SchoolService) {
  

  
  }
  
  ngOnInit(): void {
   
      }

@Input() public mark: Marks = new Marks();

  @Input() public first_name: string = "";
  @Input() public last_name: string = "";
  @Input() public subject_title: string = "";
  @Input() public avg!: any;

}