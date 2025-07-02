import { Component, Input } from '@angular/core';

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
}

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {
  @Input() courses: Course[] = [];
}
