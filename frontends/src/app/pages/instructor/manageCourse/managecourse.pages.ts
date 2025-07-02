import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-course',
  templateUrl: './managecourse.pages.html',
  styleUrls: ['./managecourse.pages.scss']
})
export class ManageCoursePage implements OnInit {

  courses: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Aquí puedes cargar los cursos del instructor
    this.loadCourses();
  }

  loadCourses(): void {
    // Simulación de carga de cursos
    this.courses = [
      { id: 1, title: 'Curso de Angular', status: 'Publicado' },
      { id: 2, title: 'Curso de TypeScript', status: 'Borrador' }
    ];
  }

  editCourse(courseId: number): void {
    // Lógica para editar un curso
    console.log('Editar curso', courseId);
  }

  deleteCourse(courseId: number): void {
    // Lógica para eliminar un curso
    console.log('Eliminar curso', courseId);
    this.courses = this.courses.filter(course => course.id !== courseId);
  }
}
