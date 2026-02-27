import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CourseCardComponent } from './components/courseCard/coursecard.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sideBar/sidebar.component';
// Admin pages
import { CourseReviewPage } from './pages/admin/courseReview/coursereview.pages';
import { DashboardAdminPage } from './pages/admin/dashboard/dashboardAdmin.pages';
import { ReportPageComponent } from './pages/admin/report/report.pages';
import { UsersPagesComponent } from './pages/admin/users/users.pages';
// Estudiante pages
import { CertificatePage } from './pages/estudiante/certificate/certificate.pages';
import { CourseViewPage } from './pages/estudiante/courseView/courseview.pages';
import { DashboardStudentPage } from './pages/estudiante/dashboard/dashboardStudent.pages';
import { InscripcionPagesComponent } from './pages/estudiante/inscripcion/inscripcion.pages';
import { MyCoursePage } from './pages/estudiante/myCourse/mycourse.pages';
import { QuizPagesComponent } from './pages/estudiante/quiz/quiz.pages';
// Instructor pages
import { CreateCoursePage } from './pages/instructor/createCourse/createcourse.pages';
import { DashboardTeacherPage } from './pages/instructor/dashboard/dashboardTeacher.pages';
import { ManageCoursePage } from './pages/instructor/manageCourse/managecourse.pages';
import { SubmissingPage } from './pages/instructor/submissing/submissing.pages';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    CourseCardComponent,
    CourselistComponent,
    SidebarComponent,
    CourseReviewPage,
    DashboardAdminPage,
    ReportPageComponent,
    UsersPagesComponent,
    CertificatePage,
    CourseViewPage,
    DashboardStudentPage,
    InscripcionPagesComponent,
    MyCoursePage,
    QuizPagesComponent,
    CreateCoursePage,
    DashboardTeacherPage,
    ManageCoursePage,
    SubmissingPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    MainLayoutComponent,
    FooterComponent,
    RegisterComponent,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
