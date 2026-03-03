import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-course-review',
  templateUrl: './coursereview.pages.html',
  styleUrls: ['./coursereview.pages.scss']
})
export class CourseReviewPage implements OnInit {
  courses: any[] = [];
  filteredCourses: any[] = [];
  searchTerm: string = '';

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getAll().subscribe({
      next: (data) => {
        const arr = Array.isArray(data) ? data : (data as any).data || [];
        this.courses = arr;
        this.filteredCourses = [...this.courses];
      },
      error: (err) => console.error('Error cargando cursos en revisión:', err)
    });
  }

  searchCourse(event?: any): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCourses = this.courses.filter(c =>
      (c.title || c.name || '').toLowerCase().includes(term)
    );
  }

  updateStatus(courseId: number, status: string): void {
    this.courseService.update(courseId, { status }).subscribe({
      next: () => {
        this.loadCourses();
      },
      error: (err) => console.error(`Error actualizando curso ${courseId} a ${status}:`, err)
    });
  }
}
