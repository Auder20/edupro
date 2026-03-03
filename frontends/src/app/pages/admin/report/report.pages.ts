import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-report-page',
  templateUrl: './report.pages.html',
  styleUrls: ['./report.pages.scss']
})
export class ReportPageComponent implements OnInit {
  reports: any[] = [];
  filteredReports: any[] = [];
  dateFrom: string = '';
  dateTo: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.generarReporte();
  }

  generarReporte(event?: any): void {
    if (event) event.preventDefault();
    this.userService.getUsers().subscribe({
      next: (data) => {
        const arr = Array.isArray(data) ? data : (data as any).data || [];
        this.reports = arr;

        // Filter logically
        this.filteredReports = this.reports.filter(r => {
          const createdAt = new Date(r.created_at || r.createdAt);
          if (this.dateFrom && new Date(this.dateFrom) > createdAt) return false;
          if (this.dateTo && new Date(this.dateTo) < createdAt) return false;
          return true;
        });
      },
      error: (err) => console.error('Error generando reporte', err)
    });
  }
}
