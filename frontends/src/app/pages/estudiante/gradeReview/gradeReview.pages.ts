// gradeReview.pages.ts
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-grade-review',
  templateUrl: './gradeReview.pages.html',
  styleUrls: ['./gradeReview.pages.css']
})
export class GradeReviewPage implements OnInit {
  grades: any[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizService.getAll().subscribe({
      next: (data) => {
        const arr = Array.isArray(data) ? data : (data as any).data || [];
        this.grades = arr;
      },
      error: (err) => console.error('Error cargando notas', err)
    });
  }
}
