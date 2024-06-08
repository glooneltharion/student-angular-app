import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  private studentsUrl = 'https://jsonplaceholder.typicode.com/users';

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }

  getStudent(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Student>(url);
  }

  updateStudent(student: Student): Observable<Student> {
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http.put<Student>(url, student, httpOptions);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student, httpOptions);
  }

  deleteStudent(student: Student): Observable<Student> {
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http.delete<Student>(url, httpOptions);
  }
}
