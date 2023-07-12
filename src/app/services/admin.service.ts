import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  token: string;
  constructor(private http: HttpClient) {}
  getCurrentAdmin() {
    return this.http.get('http://127.0.0.1:8000/api/getSuperAdmin');
  }
}
