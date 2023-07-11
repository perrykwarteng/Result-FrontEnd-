import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css'],
})
export class ManageStudentsComponent {
  res;
  constructor(private service: StudentService) {}

  ngOnInit(): void {
    this.service.getAllStudents().subscribe((res) => {
      this.res = res;
    });
  }
}
