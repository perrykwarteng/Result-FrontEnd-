import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {}
  response: any;
  adminLogin = this.fb.group({
    index_number: ['', Validators.required],
    password: ['', Validators.required],
  });


  ngOnInit(): void {}
  onSubmit() {
    if (this.adminLogin.valid) {
      this.authService.login(this.adminLogin.value).subscribe((res) => {
        if (res != null) {
          this.response = res;
          if (this.response.admin.role == 'superAdmin') {
            localStorage.setItem('token', this.response.token);
            this.route.navigate(['/admin']);
          } else {
            console.log('Error Cred');
          }
        }
      });
    }
  }
}
