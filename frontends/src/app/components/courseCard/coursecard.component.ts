import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.css']
})
export class CourseCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() instructor: string = '';

  @Input() course: any = {
    title: '',
    description: '',
    instructor: ''
  };

  enroll() {
    // Acción de inscripción (puedes implementar lógica real aquí)
    console.log('Inscrito en el curso:', this.course.title);
  }
}
