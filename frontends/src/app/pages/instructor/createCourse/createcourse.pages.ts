import { Component } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './createcourse.pages.html',
  styleUrls: ['./createcourse.pages.scss']
})
export class CreateCoursePage {
  courseTitle: string = '';
  courseDescription: string = '';
  isSubmitting: boolean = false;

  constructor() {}

  submitCourse() {
    this.isSubmitting = true;
    // Aquí iría la lógica para enviar el curso al backend
    // Por ejemplo, usando un servicio de Angular
    setTimeout(() => {
      this.isSubmitting = false;
      alert('Curso creado exitosamente');
      this.courseTitle = '';
      this.courseDescription = '';
    }, 1000);
  }
}
