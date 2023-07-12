import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ManageTeachersComponent } from './Admin/pages/manage-teachers/manage-teachers.component';
import { ManageStudentsComponent } from './Admin/pages/manage-students/manage-students.component';
import { ManageSubjectsComponent } from './Admin/pages/manage-subjects/manage-subjects.component';
import { ResultsComponent } from './Admin/pages/results/results.component';
import { ErrorComponent } from './error/error.component';
import { SettingsComponent } from './Admin/pages/settings/settings.component';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { TeacherDashboardComponent } from './Teachers/SubjectTeacher/teacher-dashboard/teacher-dashboard.component';
import { AddReslutsComponent } from './Teachers/SubjectTeacher/pages/add-resluts/add-resluts.component';
import { ManageClassesComponent } from './Admin/pages/manage-classes/manage-classes.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'adminLogin',
    component: AdminLoginComponent,
  },
  {
    path: 'teacherLogin',
    component: TeacherLoginComponent,
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manageTeachers',
    component: ManageTeachersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manageStudents',
    component: ManageStudentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manageSubjects',
    component: ManageSubjectsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manageClass',
    component: ManageClassesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'results',
    component: ResultsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },

  // Subject Teacher Routes
  {
    path: 'subjectTeacher',
    component: TeacherDashboardComponent,
  },
  {
    path: 'addResults',
    component: AddReslutsComponent,
  },

  // Class Teacher

  // 404 Error
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
