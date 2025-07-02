import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAuthenticated: boolean = false;
  userRole: string = '';

  constructor() {
    // Simulación: aquí deberías obtener el estado real de autenticación y rol
    // Por ejemplo, usando un AuthService
    // this.isAuthenticated = authService.isAuthenticated();
    // this.userRole = authService.getUserRole();
  }

  logout() {
    // Lógica de logout real aquí
    this.isAuthenticated = false;
    this.userRole = '';
    // Redirigir o limpiar sesión
    console.log('Sesión cerrada');
  }
}
