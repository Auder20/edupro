import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.pages.html',
  styleUrls: ['./users.pages.scss']
})
export class UsersPagesComponent {
  // Aquí puedes agregar la lógica para la página de administración de usuarios

  users: any[] = [];
  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];

  constructor() {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    // Lógica para cargar usuarios desde el backend
    console.log('Cargando usuarios...');
  }

  // Ejemplo de método para agregar un usuario
  addUser(user: { id: number; name: string; email: string; role: string }) {
    // Lógica para agregar usuario al backend
    console.log('Agregar usuario', user);
  }

  // Ejemplo de método para eliminar un usuario
  removeUser(id: number) {
    // Lógica para eliminar usuario del backend
    console.log('Eliminar usuario con id:', id);
  }

  editUser(user: any) {
    // Lógica para editar usuario
    console.log('Editar usuario', user);
  }

  deleteUser(user: any) {
    // Lógica para eliminar usuario
    console.log('Eliminar usuario', user);
  }

  // Ejemplo de método para agregar un usuario
  addUser(user: { id: number; name: string; email: string; role: string }) {
    this.users.push(user);
  }

  // Ejemplo de método para eliminar un usuario
  removeUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  editUser(user: any) {
    // Lógica para editar usuario
    console.log('Editar usuario', user);
  }

  deleteUser(user: any) {
    // Lógica para eliminar usuario
    this.users = this.users.filter(u => u.id !== user.id);
  }
}
