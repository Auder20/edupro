import { Component } from '@angular/core';

@Component({
  selector: 'app-submissing',
  templateUrl: './submissing.pages.html',
  styleUrls: ['./submissing.pages.scss']
})
export class SubmissingPage {
  submissions = [
    { studentName: 'Juan Pérez', date: new Date(), status: 'Pendiente' },
    { studentName: 'Ana Garay', date: new Date(), status: 'Entregado' }
  ];

  constructor() {}

  viewSubmission(submission: any) {
    // Lógica para ver detalles de la entrega
    console.log('Ver entrega', submission);
  }
}
