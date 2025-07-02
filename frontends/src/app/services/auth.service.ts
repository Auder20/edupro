import { Injectable } from '@angular/core';

export type UserRole = 'admin' | 'instructor' | 'estudiante';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentRole: UserRole | null = null;

  constructor() {}

  // Simula iniciar sesión con un rol específico
  loginAs(role: UserRole): void {
    this.currentRole = role;
  }

  // Cierra sesión
  logout(): void {
    this.currentRole = null;
  }

  // Devuelve el rol actual
  getRole(): UserRole | null {
    return this.currentRole;
  }

  // Verifica si el usuario tiene un rol específico
  hasRole(role: UserRole): boolean {
    return this.currentRole === role;
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.currentRole !== null;
  }
}
