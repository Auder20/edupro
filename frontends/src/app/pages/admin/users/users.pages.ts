import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.pages.html',
  styleUrls: ['./users.pages.scss']
})
export class UsersPagesComponent {
  // Aquí puedes agregar la lógica para la página de administración de usuarios

  users = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
    { id: 2, name: 'Ana Garay', email: 'ana@example.com' },
    { id: 3, name: 'Luis Martínez', email: 'luis@example.com' }
  ];

  constructor() {}

  // Ejemplo de método para agregar un usuario
  addUser(user: { id: number; name: string; email: string }) {
    this.users.push(user);
  }

  // Ejemplo de método para eliminar un usuario
  removeUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
