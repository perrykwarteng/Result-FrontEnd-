import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  greetImg: string = '../../../assets/greet.png';
  isDispaly: boolean = false;
  toggle() {
    this.isDispaly = !this.isDispaly;
  }

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
