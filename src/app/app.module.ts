import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ManageTeachersComponent } from './Admin/pages/manage-teachers/manage-teachers.component';
import { ManageStudentsComponent } from './Admin/pages/manage-students/manage-students.component';
import { AdminTempalateComponent } from './Admin/admin-tempalate/admin-tempalate.component';
import { ManageSubjectsComponent } from './Admin/pages/manage-subjects/manage-subjects.component';
import { ResultsComponent } from './Admin/pages/results/results.component';
import { SettingsComponent } from './Admin/pages/settings/settings.component';
import { ErrorComponent } from './error/error.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { AddReslutsComponent } from './Teachers/SubjectTeacher/pages/add-resluts/add-resluts.component';
import { TeacherDashboardComponent } from './Teachers/SubjectTeacher/teacher-dashboard/teacher-dashboard.component';
import { ManageClassesComponent } from './Admin/pages/manage-classes/manage-classes.component';
import { ResultSlipComponent } from './result-slip/result-slip.component';
import { ClassTeacherComponent } from './Teachers/class-teacher/class-teacher.component';
import { ClassStudentComponent } from './Teachers/page/class-student/class-student.component';
import { AddRemarksComponent } from './Teachers/page/add-remarks/add-remarks.component';
import { BothTeachersComponent } from './Teachers/both-teachers/both-teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    ManageTeachersComponent,
    ManageStudentsComponent,
    AdminTempalateComponent,
    ManageSubjectsComponent,
    ResultsComponent,
    SettingsComponent,
    ErrorComponent,
    TeacherLoginComponent,
    AddReslutsComponent,
    TeacherDashboardComponent,
    ManageClassesComponent,
    ResultSlipComponent,
    ClassTeacherComponent,
    ClassStudentComponent,
    AddRemarksComponent,
    BothTeachersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
