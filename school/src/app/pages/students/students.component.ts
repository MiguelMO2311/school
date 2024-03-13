import { Component, NgModule } from '@angular/core';
import { CardStudentsComponent } from '../../components/cards/card-students/card-students.component';
import { Students } from '../../models/students';
import { SchoolService } from '../../school.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MarksComponent } from '../marks/marks.component';
import { FormControl, FormGroup, FormsModule, NgModelGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CardStudentsComponent, HomeComponent, MarksComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  student_id!: string;

  public students: Students[] = [];



  constructor(private readonly schoolService: SchoolService, private route: ActivatedRoute, private router: Router) {

    this.schoolService.getStudentsApi().subscribe((data: any) => {
      console.log('HOLA DATA', data)
      this.students = data;

    })
  }

  public findStudent(student_id: string) {
    if (student_id === "") {
      this.schoolService.getStudentsApi().subscribe((data: any) => {

        this.students = data;
      })
    } else {
      this.schoolService.getStudentByIdApi(Number(student_id)).subscribe((data: any) => {

        this.students = [data];
      })
    }

  }
  deleteStudent(student_id: string): void {
    this.schoolService.deleteStudentApi(student_id).subscribe((data) => {
      console.log(data);
      this.schoolService.getStudentsApi().subscribe((data: Students[]) => {
        console.log(data);
        this.students = data
      })
    })
    this.refreshStudents();
    this.students = [];

  }



  refreshStudents(): void {
    this.schoolService.getStudentsApi().subscribe((data: Students[]) => {
      console.log(data);
      this.students = data;
    });
  }


  public createStudent(student_id: HTMLInputElement, first_name: HTMLInputElement, last_name: HTMLInputElement,
    group_id: HTMLInputElement, registration_date: HTMLInputElement) {
    const newStudent: Students = {
      student_id: Number(student_id.value),
      first_name: first_name.value,
      last_name: last_name.value,
      group_id: Number(group_id.value),
      registration_date: new Date(registration_date.value)
    }
    console.log(newStudent)
    this.schoolService.addStudentApi(newStudent).subscribe((data: Students[]) => {
      console.log(data);
      this.schoolService.getStudentsApi().subscribe((data: Students[]) => {
        console.log(data);
        this.students = data;
        student_id.value = '';
        first_name.value = '';
        last_name.value = '';
        group_id.value = '';
        registration_date.valueAsDate = new Date('')
      })
      console.log(newStudent);
    })
    this.students = [];
    this.refreshStudents();
  }


  public updateStudent(student_id: HTMLInputElement, first_name: HTMLInputElement, last_name: HTMLInputElement,
    group_id: HTMLInputElement, registration_date: HTMLInputElement) {
    const myStudent: Students = {
      student_id: Number(student_id.value),
      first_name: first_name.value,
      last_name: last_name.value,
      group_id: Number(group_id.value),
      registration_date: new Date(registration_date.value)

    }

    console.log(myStudent);

    this.schoolService.updateStudentApi(myStudent).subscribe((data: any) => {
      const index = this.students.findIndex(student => myStudent.student_id === student.student_id);
      console.log(data);
      this.schoolService.getStudentByIdApi(Number(student_id.value)).subscribe((data: Students[]) => {
        console.log(data);
        this.students = data;
        student_id.value = '';
        first_name.value = '';
        last_name.value = '';
        group_id.value = '';
        registration_date.valueAsDate = new Date('')
      })

    })
    this.students = [];
    this.refreshStudents();
  }
}




