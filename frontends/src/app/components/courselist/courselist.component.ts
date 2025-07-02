import { Component, Input } from '@angular/core';

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  level: string; // Agregado nivel
}

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {
  @Input() courses: Course[] = [
    { id: 1, title: 'Matemáticas', description: 'Curso de matemáticas básicas.', instructor: 'Juan Pérez', level: 'Básico' },
    { id: 2, title: 'Ciencias', description: 'Curso de ciencias naturales.', instructor: 'Ana Garay', level: 'Intermedio' }
  ];
}
