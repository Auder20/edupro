import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../../services/enrollment.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboardStudent.pages.html',
  styleUrls: ['./dashboardStudent.pages.scss']
})
export class DashboardStudentPage implements OnInit {
  inscripciones: any[] = [];
  cursosCount = 0;

  constructor(
    private enrollmentService: EnrollmentService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    const userRole = this.authService.getRole(); // Si quieres aislar

    // Para un estudiante, idealmente su backend traería solo sus cursos. 
    // Usaremos getAll() asumiendo que el backend filtra o traemos todo.
    this.enrollmentService.getAll().subscribe({
      next: (data) => {
        const arr = Array.isArray(data) ? data : (data as any).data || [];
        this.inscripciones = arr;
        this.cursosCount = arr.length;
      },
      error: (err) => console.error('Error cargando inscripciones:', err)
    });
  }
}
