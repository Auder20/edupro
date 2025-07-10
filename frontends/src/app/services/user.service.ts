import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface User {
  id: number;
  name: string;
  email: string;
  role?: string; // Agregado para el mapeo de roles
  // agrega más campos según tu modelo de usuario
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Mapea el rol del frontend al valor esperado por el backend
  private mapRoleToBackend(role: string): string {
    switch (role) {
      case 'admin':
        return 'admin';
      case 'instructor':
        return 'instructor';
      case 'estudiante':
        return 'student';
      default:
        return 'student'; // valor por defecto
    }
  }

  createUser(user: User): Observable<User> {
    // Si el usuario tiene rol, lo mapeamos antes de enviarlo al backend
    const userToSend = { ...user };
    if (userToSend.role) {
      userToSend.role = this.mapRoleToBackend(userToSend.role);
    }
    return this.http.post<User>(this.apiUrl, userToSend);
  }

  updateUser(id: number, user: User): Observable<User> {
    // Si el usuario tiene rol, lo mapeamos antes de enviarlo al backend
    const userToSend = { ...user };
    if (userToSend.role) {
      userToSend.role = this.mapRoleToBackend(userToSend.role);
    }
    return this.http.put<User>(`${this.apiUrl}/${id}`, userToSend);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
