import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.css'],
})
export class ManageSubjectsComponent implements OnInit {
  res;
  constructor(private service: SubjectService) {}

  ngOnInit(): void {
    this.service.getSibjects().subscribe((res) => {
      this.res = res;
      console.log(res);
    });
  }
}
