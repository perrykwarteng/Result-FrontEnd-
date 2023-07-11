import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../interfaces/teacher';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  getAllUrl: any = 'http://127.0.0.1:8000/api/allTeachers';
  createUrl: string = '';
  upDateUrl: string = '';
  deleteUrl: string = '';
  constructor(private http: HttpClient) {}

  getTeachers() {
    return this.http.get<Teacher>(this.getAllUrl);
  }

  createTeacher() {}

  updateTeacher() {}

  deleteTeacher() {}
}
