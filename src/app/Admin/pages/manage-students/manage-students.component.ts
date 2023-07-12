import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClassService } from 'src/app/services/class.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css'],
})
export class ManageStudentsComponent {
  res;
  data;
  constructor(private service: StudentService, private fb: FormBuilder, private classes: ClassService) {}

  ngOnInit(): void {
    this.service.getAllStudents().subscribe((res) => {
      this.res = res;
    });

    this.classes.getAllClass().subscribe((res) => {
      this.data = res;
    });
  }

  studentForm = this.fb.group({
    first_name: ['', Validators.required],
    other_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    class: ['', Validators.required],
    guidance: ['', Validators.required],
    guidance_number: ['', Validators.required],
    number: ['', Validators.required],
    location: ['', Validators.required],
  });

  createStudents() {
    if (this.studentForm.valid) {
      this.service.createStudent(this.studentForm.value).subscribe((res) => {
        console.log('successful');
      });
    } else {
      console.log('Bad entery');
    }
  }
}
