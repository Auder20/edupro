import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-manage-course',
  templateUrl: './managecourse.pages.html',
  styleUrls: ['./managecourse.pages.scss']
})
export class ManageCoursePage implements OnInit {
  courses: any[] = [];
  selectedCourse: any = null;

  constructor(
    private courseService: CourseService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getAll().subscribe({
      next: (data) => {
        const arr = Array.isArray(data) ? data : (data as any).data || [];
        this.courses = arr;
      },
      error: (err) => console.error('Error al cargar los cursos', err)
    });
  }

  editCourse(course: any): void {
    this.selectedCourse = { ...course };
  }

  cancelEdit(): void {
    this.selectedCourse = null;
  }

  saveCourse(): void {
    if (this.selectedCourse && this.selectedCourse.id) {
      const payload = {
        title: this.selectedCourse.title || this.selectedCourse.name,
        description: this.selectedCourse.description,
        category: this.selectedCourse.category
      };
      this.courseService.update(this.selectedCourse.id, payload).subscribe({
        next: () => {
          this.loadCourses();
          this.selectedCourse = null;
        },
        error: (err) => console.error('Error actualizando curso', err)
      });
    }
  }

  deleteCourse(courseId: number): void {
    if (confirm('¿Seguro de que deseas eliminar este curso?')) {
      this.courseService.delete(courseId).subscribe({
        next: () => {
          this.courses = this.courses.filter(course => course.id !== courseId);
          if (this.selectedCourse?.id === courseId) this.selectedCourse = null;
        },
        error: (err) => console.error('Error al eliminar el curso', err)
      });
    }
  }
}
