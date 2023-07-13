import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css'],
})
export class TeacherDashboardComponent implements OnInit {
  greetImg: string = '../../../assets/greet.png';
  constructor(private services: TeacherService, private auth: AuthService) {}
  data: any;
  ngOnInit(): void {
    this.services.getTeacherLog().subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }

  logout() {
    this.auth.logout();
  }
}
