import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../interfaces/teacher';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  api: any = 'http://127.0.0.1:8000/api/teacher';
  constructor(private http: HttpClient) {}

  // getTeachers() {
  //   // return this.http.get<Teacher>(this.api);
  // }
}
