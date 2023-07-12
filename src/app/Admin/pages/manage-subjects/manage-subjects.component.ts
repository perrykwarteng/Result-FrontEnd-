import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.css'],
})
export class ManageSubjectsComponent implements OnInit {
  res;
  constructor(private service: SubjectService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.service.getSibjects().subscribe((res) => {
      this.res = res;
      console.log(res);
    });
  }

  subjectForm = this.fb.group({
    subjectCode: ['', Validators.required],
    subjectName: ['', Validators.required],
  });

  createSubject() {
    if (this.subjectForm.valid) {
      this.service.createSubject(this.subjectForm.value).subscribe((res) => {
        console.log('successful');
      });
    } else {
      console.log('Bad Entery');
    }
  }
}
