import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dashboardTeacher.pages.html',
  styleUrls: ['./dashboardTeacher.pages.scss']
})
export class DashboardTeacherPage implements OnInit {
  cursosCount = 0;
  courses: any[] = [];

  constructor(
    private courseService: CourseService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    this.courseService.getAll().subscribe({
      next: (data) => {
        const arr = Array.isArray(data) ? data : (data as any).data || [];
        this.courses = arr;
        this.cursosCount = arr.length;
      },
      error: (err) => console.error('Error cargando cursos del instructor:', err)
    });
  }
}
