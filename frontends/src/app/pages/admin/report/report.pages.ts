import { Component } from '@angular/core';

@Component({
  selector: 'app-report-page',
  templateUrl: './report.pages.html',
  styleUrls: ['./report.pages.scss']
})
export class ReportPageComponent {
  // Aquí puedes agregar la lógica de tu página de reportes
  constructor() {}

  // Ejemplo de método
  generarReporte(): void {
    // Lógica para generar un reporte
    console.log('Reporte generado');
  }
}
