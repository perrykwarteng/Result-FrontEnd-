import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://127.0.0.1:8000/api/auth';
  constructor(private http: HttpClient) {}

  login(data): Observable<any> {
    return this.http.post(this.url, data);
  }

  isLoggin() {
    return localStorage.getItem('token') != null;
  }
}
