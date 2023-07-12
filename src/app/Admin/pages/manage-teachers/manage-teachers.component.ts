import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Teacher } from 'src/app/interfaces/teacher';
import { ClassService } from 'src/app/services/class.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrls: ['./manage-teachers.component.css'],
})
export class ManageTeachersComponent implements OnInit {
  data;
  classe;
  constructor(
    private service: TeacherService,
    private fb: FormBuilder,
    private classes: ClassService
  ) {}

  createAdmin = this.fb.group({
    first_name: ['', Validators.required],
    other_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    asSubjectTeacher: ['', Validators.required],
    asClassTeacher: ['', Validators.required],
    number: ['', Validators.required],
    location: ['', Validators.required],
  });

  teachera = this.fb.group({
    teacher: ['', Validators.required],
    class: ['', Validators.required],
  });

  ngOnInit(): void {
    this.service.getTeachers().subscribe((data: Teacher) => {
      this.data = data;
      // console.log(data);
    });

    // GetClass
    this.classes.getAllClass().subscribe((data) => {
      this.classe = data;
      // console.log(this.classe);log
      console.log(this.classe.classCode);
    });
  }

  // Create Teacher
  onSubmit() {
    if (this.createAdmin.valid) {
      this.service.createTeacher(this.createAdmin.value).subscribe((res) => {
        // console.log(res + 'Successful');
      });
    } else {
      console.log('Bad Entery');
    }
  }
  // Assign Teacher
  assignClass() {
    if (this.teachera.valid) {
      this.classes.assignClassTeacher(this.teachera.value).subscribe((res) => {
        // console.log(res + 'Successful');
        console.log('successful');
      });
    } else {
      console.log('Bad Entery');
    }
  }
}
