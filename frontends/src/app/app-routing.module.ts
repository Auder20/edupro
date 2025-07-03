// app-routing.module.ts
//
// Este módulo define las rutas principales de la aplicación Angular.
// Se recomienda agrupar rutas por roles y aplicar guards para proteger el acceso.
//
// Estructura:
// - Rutas hijas bajo MainLayoutComponent para la navegación principal.
// - Rutas separadas para login y componentes de layout.
//
// Notas de mejora:
// - Considera usar lazy loading para módulos de admin, estudiante e instructor.
// - Aplica guards en rutas sensibles según el rol del usuario.
// - Mantén consistencia en los nombres de carpetas y archivos.
//
// Autor: [Tu Nombre]
// Última actualización: 2025-07-03

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
      // Admin
      { path: 'admin/course-review', component: CourseReviewPage },
      { path: 'admin/dashboard', component: DashboardAdminPage },
      { path: 'admin/report', component: ReportPageComponent },
      { path: 'admin/users', component: UsersPagesComponent },
      // Estudiante
      { path: 'student/certificate', component: CertificatePage },
      { path: 'student/course-view', component: CourseViewPage },
      { path: 'student/dashboard', component: DashboardStudentPage },
      { path: 'student/inscripcion', component: InscripcionPagesComponent },
      { path: 'student/my-course', component: MyCoursePage },
      { path: 'student/quiz', component: QuizPagesComponent },
      // Instructor
      { path: 'instructor/create-course', component: CreateCoursePage },
      { path: 'instructor/dashboard', component: DashboardTeacherPage },
      { path: 'instructor/manage-course', component: ManageCoursePage },
      { path: 'instructor/submissing', component: SubmissingPage }
    ]
  },
  { path: 'login', component: LoginComponent }, // Login fuera del layout global
  { path: 'footer', component: FooterComponent }, // Opcional: rutas directas a componentes de layout
  { path: 'navbar', component: NavbarComponent },
  { path: 'sidebar', component: SidebarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
