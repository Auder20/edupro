import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../../services/enrollment.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-my-course',
  templateUrl: './mycourse.pages.html',
  styleUrls: ['./mycourse.pages.css']
})
export class MyCoursePage implements OnInit {
  courses: any[] = [];

  constructor(
    private enrollmentService: EnrollmentService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.enrollmentService.getAll().subscribe({
        next: (data) => {
          const arr = Array.isArray(data) ? data : (data as any).data || [];
          // Filter by the current user
          const myEnrollments = arr.filter((e: any) => e.user_id === user.id);
          // Map to getting the course info, normally backend returns eagerly loaded Course
          this.courses = myEnrollments.map((e: any) => e.Course || e);
        },
        error: (err) => console.error('Error cargando los cursos', err)
      });
    }
  }

  // Método original preservado por si un test lo requiere (mencionado en comentarios del archivo original)
  obtenerCursos(): string[] {
    return ['Matemáticas', 'Ciencias', 'Historia'];
  }
}
