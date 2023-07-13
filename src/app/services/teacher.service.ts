import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../interfaces/teacher';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  getAllUrl: any = 'http://127.0.0.1:8000/api/allTeachers';
  getUrl = 'http://127.0.0.1:8000/api/getTeacher';
  createUrl: string = 'http://127.0.0.1:8000/api/createTeachers';
  upDateUrl: string = '';
  deleteUrl: string = '';
  constructor(private http: HttpClient) {}

  getTeachers() {
    return this.http.get<Teacher>(this.getAllUrl);
  }

  createTeacher(data) {
    return this.http.post(this.createUrl, data);
  }

  getTeacherLog() {
    return this.http.get(this.getUrl);
  }

  updateTeacher() {}

  deleteTeacher() {}
}
