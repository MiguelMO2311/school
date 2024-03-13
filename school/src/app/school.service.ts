import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Students } from './models/students';
import { Observable } from 'rxjs';
import { Marks } from './models/marks';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  updatedStudent: any;
 

  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:3000";
  
  private students: Students[] = []


  public getStudentsApi():Observable<Students[]> {
    return this.http.get<Students[]>(`${this.url}/students`)
  }
  
  public getStudentByIdApi(student_id: number):Observable<Students[]> {
    return this.http.get<Students[]>(`${this.url}/students/${student_id}`)
  }

  public addStudentApi(student: Students):Observable<Students[]> {
    return this.http.post<Students[]>(`${this.url}/students`, student)
  }

  public updateStudentApi(student: Students):Observable<Students[]> {
    return this.http.put<Students[]>(`${this.url}/students/${student.student_id}`, student)
  }
  
  public deleteStudentApi(student_id: string) {
    return this.http.delete<Students[]>(`${this.url}/students/${student_id}`);
  }
  
// ****** Marks ****   ***************************************************************************************

private marks: Marks[] = []

  // boton nota media

    public getAverageMarkOfStudent(student_id: number):Observable<Marks[]> {
    return this.http.get<Marks[]>(`${this.url}/students${student_id}/average-mark`)
  }
   
  // boton apuntadas 
  
  public enrolledSubjectsOfStudent(student_id: number):Observable<Marks[]> {
    return this.http.get<Marks[]>(`${this.url}/students${student_id}/enrolled-subjects`)
  }
  public getAllStudentsAndSubjects():Observable<Marks[]> {
    return this.http.get<Marks[]>(`${this.url}/students-and-subjects`)
  }
     // boton impartidas
 
  public getTaughtSubjectsOfTeacher(teacher_id: number):Observable<Marks[]> {
    return this.http.get<Marks[]>(`${this.url}/teachers${teacher_id}/taught-subjects`)
  }
 public getAllTeachersAndSubjects():Observable<Marks[]> {
    return this.http.get<Marks[]>(`${this.url}/teachers-and-subjects`)
    
  }

}
