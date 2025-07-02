import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Puedes agregar propiedades y métodos aquí según sea necesario
  menuItems = [
    { label: 'Inicio', icon: 'home', route: '/inicio' },
    { label: 'Cursos', icon: 'book', route: '/cursos' },
    { label: 'Perfil', icon: 'person', route: '/perfil' }
  ];

  constructor() {}
}
