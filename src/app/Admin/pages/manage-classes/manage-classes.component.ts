import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-manage-classes',
  templateUrl: './manage-classes.component.html',
  styleUrls: ['./manage-classes.component.css'],
})
export class ManageClassesComponent implements OnInit {
  data;
  constructor(private classes: ClassService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.classes.getAllClass().subscribe((res) => {
      this.data = res;
    });
  }

  classForm = this.fb.group({
    classCode: ['', Validators.required],
    className: ['', Validators.required],
  });

  createClass() {
    if (this.classForm.valid) {
      this.classes.createClass(this.classForm.value).subscribe((res) => {
        console.log('successful');
      });
    } else {
      console.log('Bad Input');
    }
  }
}
