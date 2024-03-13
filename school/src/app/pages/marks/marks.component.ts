import { Component, NgModule } from '@angular/core';
import { SchoolService } from '../../school.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Marks } from '../../models/marks';
import { CardMarksComponent } from '../../components/cards/card-marks/card-marks.component';
import { Subjects } from '../../models/subjects';
import { Teachers } from '../../models/teachers';
import { Students } from '../../models/students';

@Component({
  selector: 'app-marks',
  standalone: true,
  imports: [CommonModule, HttpClientModule, HomeComponent, ReactiveFormsModule, CardMarksComponent],
  templateUrl: './marks.component.html',
  styleUrl: './marks.component.css',
})

export class MarksComponent {

  public marks: Marks[] = [];
  public selection: any[] = [];

  mark_id!: HTMLInputElement;
  student_id!: number;
  teacher_id!: number;

  constructor(private readonly schoolService: SchoolService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.refreshStudents();
  }


  public findEnrolled(inputId: HTMLInputElement) {
    if (inputId.value === "") {
      this.schoolService.enrolledSubjectsOfStudent(this.student_id).subscribe((data: any) => {
        console.log(data);
        this.selection = data;
      })
    } else {
      this.schoolService.enrolledSubjectsOfStudent(Number(this.student_id)).subscribe((data: any) => {
        console.log(data);
        this.selection = data;
        this.mark_id.value = "";
      })
      this.selection = [];

    }
  }


  public findTaught(teacher_id: HTMLInputElement) {
    if (teacher_id.value === "") {
      this.schoolService.getTaughtSubjectsOfTeacher(this.teacher_id).subscribe((data: any) => {
        console.log(data);
        this.selection = data;
      })
    } else {
      this.schoolService.getTaughtSubjectsOfTeacher(Number(teacher_id.value)).subscribe((data: any) => {
        console.log(data);
        this.selection = data;

        teacher_id.value = "";
      })
      this.selection = [];

    }
  }


  public getAverageMark(inputId: HTMLInputElement) {
    this.schoolService.getAverageMarkOfStudent(Number(inputId.value)).subscribe((data: any) => {
      console.log(data);
      this.selection = data;
      this.mark_id.value = "";
    })
    this.selection = [];
  }


  refreshStudents(): void {
    this.schoolService.getAllStudentsAndSubjects().subscribe((data: Marks[]) => {
      console.log(data);
      this.selection = data;
    });
  }
}