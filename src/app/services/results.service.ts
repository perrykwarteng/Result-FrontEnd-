import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  getAllUrl: any = 'http://127.0.0.1:8000/api/getAllRemarks';
  createRemarksUrl: string = 'http://127.0.0.1:8000/api/addRemarks';
  upDateUrl: string = '';
  deleteUrl: string = '';

  constructor(private http: HttpClient) {}

  createRemarks(data) {
    return this.http.post(this.createRemarksUrl, data);
  }

  getAllRemarks() {
    return this.http.get(this.getAllUrl);
  }
}
