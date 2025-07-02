import { Component } from '@angular/core';

@Component({
  selector: 'app-my-course',
  templateUrl: './mycourse.pages.html',
  styleUrls: ['./mycourse.pages.css']
})
export class MyCoursePage {
  courses: any[] = [
    { id: 1, title: 'Matemáticas', description: 'Curso de matemáticas básicas.' },
    { id: 2, title: 'Ciencias', description: 'Curso de ciencias naturales.' }
  ];

  constructor() {}

  // Método de ejemplo para el test
  obtenerCursos(): string[] {
    return ['Matemáticas', 'Ciencias', 'Historia'];
  }
}
