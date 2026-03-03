import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { EnrollmentService } from '../../../services/enrollment.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.pages.html',
  styleUrls: ['./inscripcion.pages.scss']
})
export class InscripcionPagesComponent implements OnInit {
  courses: any[] = [];
  studentData: any = { name: '', email: '' };
  selectedCourseId: number | string = '';

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.studentData.name = user.name;
      this.studentData.email = user.email;
    }

    this.courseService.getAll().subscribe({
      next: (data) => {
        const arr = Array.isArray(data) ? data : (data as any).data || [];
        // Optional: filter by "status" if applicable
        this.courses = arr.filter((c: any) => c.status === 'published' || !c.status);
      },
      error: (err) => console.error('Error al cargar cursos para inscripcion', err)
    });
  }

  submitEnrollment(): void {
    if (!this.selectedCourseId) {
      alert('Por favor selecciona un curso.');
      return;
    }

    const user = this.authService.getCurrentUser();
    if (!user) return;

    this.enrollmentService.create({
      user_id: user.id,
      course_id: Number(this.selectedCourseId),
      status: 'active'
    }).subscribe({
      next: () => {
        alert('¡Inscripción exitosa!');
        this.selectedCourseId = '';
      },
      error: (err) => {
        console.error('Error al inscribirse:', err);
        alert('Hubo un error en la inscripción. Verifica si ya estás inscrito.');
      }
    });
  }
}
