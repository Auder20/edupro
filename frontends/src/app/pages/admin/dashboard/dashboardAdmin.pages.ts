// dashboardAdmin.pages.ts
//
// Componente para el dashboard del administrador.
// Aquí se gestionan las vistas y lógica principal del panel de administración.
//
// Notas:
// - Agrega métodos y propiedades según las necesidades del dashboard.
// - Considera separar lógica compleja en servicios.
//
// Autor: [Tu Nombre]
// Última actualización: 2025-07-03

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CourseService } from '../../../services/course.service';
import { EnrollmentService } from '../../../services/enrollment.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboardAdmin.pages.html',
  styleUrls: ['./dashboardAdmin.pages.scss']
})
export class DashboardAdminPage implements OnInit {
  stats = {
    users: 0,
    courses: 0,
    enrollments: 0
  };

  recentActivity: any[] = [];

  constructor(
    private userService: UserService,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) { }

  ngOnInit(): void {
    this.obtenerDatosDashboard();
  }

  obtenerDatosDashboard(): void {
    // Obtener recuento de usuarios
    this.userService.getUsers().subscribe({
      next: (data) => {
        const users = Array.isArray(data) ? data : (data as any).data || [];
        this.stats.users = users.length;
      },
      error: (err) => console.error('Error cargando usuarios', err)
    });

    // Cargar cursos
    this.courseService.getAll().subscribe({
      next: (data) => {
        const courses = Array.isArray(data) ? data : (data as any).data || [];
        this.stats.courses = courses.length;

        // Simular o extraer actividad reciente basada en cursos
        if (courses.length > 0) {
          const lCourse = courses[courses.length - 1];
          this.recentActivity.push(`Nuevo curso "${lCourse.title || lCourse.name || 'Agregado'}" creado`);
        }
      },
      error: (err) => console.error('Error cargando cursos', err)
    });

    // Cargar inscripciones
    this.enrollmentService.getAll().subscribe({
      next: (data) => {
        const enrollments = Array.isArray(data) ? data : (data as any).data || [];
        this.stats.enrollments = enrollments.length;

        // Simular o extraer actividad reciente basada en inscripciones
        if (enrollments.length > 0) {
          this.recentActivity.push(`Nueva inscripción registrada - id # ${enrollments[enrollments.length - 1].id}`);
        }
      },
      error: (err) => {
        console.error('Error cargando enrollements (asegúrate de que la ruta exista y no de 404)', err);
      }
    });
  }
}
