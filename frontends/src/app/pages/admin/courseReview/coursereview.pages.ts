import { Component } from '@angular/core';

@Component({
  selector: 'app-course-review',
  templateUrl: './coursereview.pages.html',
  styleUrls: ['./coursereview.pages.scss']
})
export class CourseReviewPage {
  // Aquí puedes agregar propiedades y métodos para la lógica de la página de revisión de cursos

  constructor() {}

  // Ejemplo de método para manejar la revisión de un curso
  reviewCourse(courseId: string): void {
    // Lógica para revisar el curso
    console.log(`Revisando curso con ID: ${courseId}`);
  }
}
