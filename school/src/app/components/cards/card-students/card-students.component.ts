import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { StudentsComponent } from '../../../pages/students/students.component';
import { Students } from '../../../models/students';
import { SchoolService } from '../../../school.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card-students',
  standalone: true,
  imports: [CommonModule, HttpClientModule, StudentsComponent, FormsModule,ReactiveFormsModule, RouterModule],
  templateUrl: './card-students.component.html',
  styleUrl: './card-students.component.css'
})
export class CardStudentsComponent {

  
  ngOnInit(): void {
   
      }

@Input() public students: Students = new Students()
@Input() public newStudent: Students = new Students()
@Input() public myStudent: Students = new Students()


@Output() eventDeleteCard = new EventEmitter<number>();

public deleteCard(student_id:number) {
this.eventDeleteCard.emit(student_id);
}


}
