import { Component } from '@angular/core';
import { Teacher } from 'src/app/interfaces/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css'],
})
export class ManageStudentsComponent {
  data;
  constructor(private service: TeacherService) {}

  ngOnInit(): void {
    // this.service.getTeachers().subscribe((data: Teacher) => {
    //   this.data = data;
    //   console.log(data);
    // });
  }
}
