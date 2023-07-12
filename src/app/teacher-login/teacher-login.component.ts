import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css'],
})
export class TeacherLoginComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {}

  teacherLogin = this.fb.group({
    index_number: ['', Validators.required],
    password: ['', Validators.required],
  });
  onSubmit() {
    if (this.teacherLogin.valid) {
      this.authService.login(this.teacherLogin.value).subscribe((res) => {
        if (res != null) {
          if (
            res.teacher.asSubjectTeacher == 1 &&
            res.teacher.asClassTeacher == 0
          ) {
            localStorage.setItem('token', res.token);
            this.route.navigate(['/subjectTeacher']);
          } else if (
            res.teacher.asClassTeacher == 1 &&
            res.teacher.asSubjectTeacher == 0
          ) {
            localStorage.setItem('token', res.token);
            this.route.navigate(['/classTeacher']);
          } else if (
            res.teacher.asClassTeacher == 1 &&
            res.teacher.asSubjectTeacher == 1
          ) {
            localStorage.setItem('token', res.token);
            this.route.navigate(['/bothTeachers']);
          }
        } else {
          console.log('error');
        }
      });
    }
  }
}
