import { Component, OnInit } from '@angular/core';
import { CertificateService } from '../../../services/certificate.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.pages.html',
  styleUrls: ['./certificate.pages.css']
})
export class CertificatePage implements OnInit {
  certificates: any[] = [];
  studentName: string = '';

  constructor(
    private certificateService: CertificateService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.studentName = this.authService.getCurrentUser()?.name || 'Estudiante no encontrado';
    this.loadCertificates();
  }

  loadCertificates() {
    this.certificateService.getAll().subscribe({
      next: (data) => {
        const arr = Array.isArray(data) ? data : (data as any).data || [];
        // Filtering could be tricky if DB returns all, but assuming backend filters or just take the first
        this.certificates = arr;
      },
      error: (err) => console.error('Error cargando certificados:', err)
    });
  }

  downloadCertificate(certificateId: string): void {
    console.log(`Descargando certificado con ID: ${certificateId}`);
  }
}
