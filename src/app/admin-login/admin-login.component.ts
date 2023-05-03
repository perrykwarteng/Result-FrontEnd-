import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  adminLogin = this.fb.group ({
    adminUser: ['', Validators.required],
    adminPass: ['', Validators.required],
  });

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.adminLogin.value);
  }
}
