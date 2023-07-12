import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-admin-tempalate',
  templateUrl: './admin-tempalate.component.html',
  styleUrls: ['./admin-tempalate.component.css'],
})
export class AdminTempalateComponent {
  greetImg: string = '../../../assets/greet.png';
  // isDispaly: boolean = false;
  // toggle() {
  //   this.isDispaly = !this.isDispaly;
  // }

  adminUser;
  constructor(private admin: AdminService, private auth: AuthService) {}

  ngOnInit(): void {
    this.admin.getCurrentAdmin().subscribe((res) => {
      this.adminUser = res;
    });
  }

  logout() {
    this.auth.logout();
  }
}
