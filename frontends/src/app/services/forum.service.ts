import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Forum {
  _id?: string;
  // Agrega aquí los campos reales del modelo de foro
}

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  private apiUrl = `${environment.apiUrl}/forum`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Forum[]> {
    return this.http.get<Forum[]>(this.apiUrl);
  }

  getById(id: string): Observable<Forum> {
    return this.http.get<Forum>(`${this.apiUrl}/${id}`);
  }

  create(forum: Forum): Observable<Forum> {
    return this.http.post<Forum>(this.apiUrl, forum);
  }

  update(id: string, forum: Forum): Observable<Forum> {
    return this.http.put<Forum>(`${this.apiUrl}/${id}`, forum);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
