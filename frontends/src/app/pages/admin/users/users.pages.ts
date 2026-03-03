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

  constructor() { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    // Lógica para cargar usuarios desde el backend
    console.log('Cargando usuarios...');
  }

  // Lógica para agregar un usuario
  addUser(user: { id: number; name: string; email: string; role: string }) {
    console.log('Agregar usuario', user);
    this.users.push(user);
  }

  // Lógica para eliminar un usuario por ID
  removeUser(id: number) {
    console.log('Eliminar usuario con id:', id);
    this.users = this.users.filter(user => user.id !== id);
  }

  editUser(user: any) {
    console.log('Editar usuario', user);
  }

  deleteUser(user: any) {
    console.log('Eliminar usuario', user);
    this.users = this.users.filter(u => u.id !== user.id);
  }
}
