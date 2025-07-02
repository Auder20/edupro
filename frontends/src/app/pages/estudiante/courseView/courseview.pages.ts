import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-view',
  templateUrl: './courseview.pages.html',
  styleUrls: ['./courseview.pages.scss']
})
export class CourseViewPage implements OnInit {
  course = {
    title: 'Curso de Matemáticas',
    description: 'Aprende matemáticas desde cero.',
    instructor: 'Juan Pérez',
    duration: '10 horas',
    modules: [
      { title: 'Álgebra' },
      { title: 'Geometría' },
      { title: 'Trigonometría' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    // Inicialización de la página de vista de curso
  }

}
