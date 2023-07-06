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

const routes: Routes = [
  {
    path: '',
    component: AdminLoginComponent,
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      {
        path: 'manageTeachers',
        component: ManageTeachersComponent,
      },
      {
        path: 'manageStudents',
        component: ManageStudentsComponent,
      },
      {
        path: 'manageSubjects',
        component: ManageSubjectsComponent,
      },
      {
        path: 'results',
        component: ResultsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
    canActivate: [AuthGuard],
  },

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
