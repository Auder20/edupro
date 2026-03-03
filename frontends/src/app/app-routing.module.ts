// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { StudentGuard } from './guards/student.guard';
import { InstructorGuard } from './guards/instructor.guard';
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

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'course-card', component: CourseCardComponent },
      { path: 'courselist', component: CourselistComponent },
      // Admin (requiere rol admin)
      {
        path: 'admin/course-review',
        component: CourseReviewPage,
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: 'admin/dashboard',
        component: DashboardAdminPage,
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: 'admin/report',
        component: ReportPageComponent,
        canActivate: [AuthGuard, AdminGuard]
      },
      {
        path: 'admin/users',
        component: UsersPagesComponent,
        canActivate: [AuthGuard, AdminGuard]
      },
      // Estudiante (requiere rol student/estudiante)
      {
        path: 'student/certificate',
        component: CertificatePage,
        canActivate: [AuthGuard, StudentGuard]
      },
      {
        path: 'student/course-view',
        component: CourseViewPage,
        canActivate: [AuthGuard, StudentGuard]
      },
      {
        path: 'student/dashboard',
        component: DashboardStudentPage,
        canActivate: [AuthGuard, StudentGuard]
      },
      {
        path: 'student/inscripcion',
        component: InscripcionPagesComponent,
        canActivate: [AuthGuard, StudentGuard]
      },
      {
        path: 'student/my-course',
        component: MyCoursePage,
        canActivate: [AuthGuard, StudentGuard]
      },
      {
        path: 'student/quiz',
        component: QuizPagesComponent,
        canActivate: [AuthGuard, StudentGuard]
      },
      // Instructor (requiere rol instructor)
      {
        path: 'instructor/create-course',
        component: CreateCoursePage,
        canActivate: [AuthGuard, InstructorGuard]
      },
      {
        path: 'instructor/dashboard',
        component: DashboardTeacherPage,
        canActivate: [AuthGuard, InstructorGuard]
      },
      {
        path: 'instructor/manage-course',
        component: ManageCoursePage,
        canActivate: [AuthGuard, InstructorGuard]
      },
      {
        path: 'instructor/submissing',
        component: SubmissingPage,
        canActivate: [AuthGuard, InstructorGuard]
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'sidebar', component: SidebarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
