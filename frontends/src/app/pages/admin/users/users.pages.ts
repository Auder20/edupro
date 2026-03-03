import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../../services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.pages.html',
  styleUrls: ['./users.pages.scss']
})
export class UsersPagesComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        // Asume que la data viene en data (o data.data dependiendo el API config)
        this.users = Array.isArray(data) ? data : (data as any).data || [];
        console.log('Usuarios cargados:', this.users);
      },
      error: (err) => console.error('Error al cargar usuarios:', err)
    });
  }

  // Lógica para agregar un usuario
  addUser(user: { id: number; name: string; email: string; role: string }) {
    console.log('Agregar usuario', user);
    // this.userService.createUser(user).subscribe...
  }

  // Lógica para eliminar un usuario por ID
  removeUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        console.log('Usuario eliminado con id:', id);
        this.loadUsers(); // Recarga la lista
      },
      error: (err) => console.error('Error al eliminar usuario:', err)
    });
  }

  editUser(user: any) {
    console.log('Editar usuario', user);
    // Redirigir a ventana o vista de editar
  }

  deleteUser(user: any) {
    if (confirm(`¿Estás seguro de eliminar a ${user.name}?`)) {
      this.removeUser(user.id);
    }
  }
}
