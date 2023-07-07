import { Component } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-admin-tempalate',
  templateUrl: './admin-tempalate.component.html',
  styleUrls: ['./admin-tempalate.component.css'],
})
export class AdminTempalateComponent {
  greetImg: string = '../../../assets/greet.png';
  // isDispaly: boolean = false;
  // toggle() {
  //   this.isDispaly = !this.isDispaly;
  // }

  res: any;
  name: any;
  constructor(private service: TeacherService) {}

  getallAd() {
    return this.service.getAllAdmin().subscribe((res) => {
      console.log(res);
      this.res = res;
      this.name = this.res.admin.first_name;
    });
  }
}
