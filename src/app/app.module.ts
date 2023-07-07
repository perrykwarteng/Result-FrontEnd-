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
