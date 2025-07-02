import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.pages.html',
  styleUrls: ['./quiz.pages.scss']
})
export class QuizPagesComponent implements OnInit {
  quizStarted = false;
  quizFinished = false;
  currentQuestionIndex = 0;
  selectedOption: string | null = null;
  score = 0;
  questions = [
    { texto: '¿Cuál es la capital de Francia?', opciones: ['París', 'Madrid', 'Roma'], respuesta: 'París' },
    { texto: '¿Cuánto es 2 + 2?', opciones: ['3', '4', '5'], respuesta: '4' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Inicialización del componente
  }

  startQuiz() {
    this.quizStarted = true;
    this.quizFinished = false;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.selectedOption = null;
  }

  selectOption(opcion: string) {
    this.selectedOption = opcion;
  }

  nextQuestion() {
    if (this.selectedOption === this.questions[this.currentQuestionIndex].respuesta) {
      this.score++;
    }
    this.currentQuestionIndex++;
    this.selectedOption = null;
    if (this.currentQuestionIndex >= this.questions.length) {
      this.quizFinished = true;
      this.quizStarted = false;
    }
  }

  restartQuiz() {
    this.startQuiz();
  }
}
