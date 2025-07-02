import { Component } from '@angular/core';

@Component({
  selector: 'app-my-course',
  templateUrl: './mycourse.pages.html',
  styleUrls: ['./mycourse.pages.css']
})
export class MyCoursePage {
  // Aquí puedes agregar la lógica de tu componente
  constructor() {}

  // Método de ejemplo para el test
  obtenerCursos(): string[] {
    return ['Matemáticas', 'Ciencias', 'Historia'];
  }
}
