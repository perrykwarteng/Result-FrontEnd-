import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/interfaces/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrls: ['./manage-teachers.component.css'],
})
export class ManageTeachersComponent implements OnInit {
  data;
  constructor(private service: TeacherService) {}

  ngOnInit(): void {
    this.service.getTeachers().subscribe((data: Teacher) => {
      this.data = data;
      console.log(data);
    });
  }
}
