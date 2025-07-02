import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.pages.html',
  styleUrls: ['./certificate.pages.css']
})
export class CertificatePage {
  // Aquí puedes agregar la lógica y propiedades necesarias para la página de certificados

  constructor() {}

  // Ejemplo de método para descargar un certificado
  downloadCertificate(certificateId: string): void {
    // Lógica para descargar el certificado
    console.log(`Descargando certificado con ID: ${certificateId}`);
  }
}
