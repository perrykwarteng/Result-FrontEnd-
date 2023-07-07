import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  greetImg: string = '../../../assets/greet.png';
  isDispaly: boolean = false;
  toggle() {
    this.isDispaly = !this.isDispaly;
  }

  res: any;
  name: any;
  constructor(
    private service: TeacherService,
    private auth: AuthService,
    private routes: Router
  ) {
    this.service.getAllAdmin().subscribe((res) => {
      console.log(res);
      this.res = res;
    });
  }

  logout() {
    this.auth.logout();
  }
}
