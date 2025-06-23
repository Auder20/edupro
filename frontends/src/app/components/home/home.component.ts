import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent {
  mensajeBienvenida = '¡Bienvenido a Mundo Mágico!';

  secciones = [
    {
      icono: '🎨',
      titulo: 'Actividades Creativas',
      descripcion: 'Dibuja, pinta y crea tus propias obras maestras.'
    },
    {
      icono: '🧩',
      titulo: 'Juegos Educativos',
      descripcion: 'Aprende mientras juegas con nuestros juegos divertidos.'
    },
    {
      icono: '📚',
      titulo: 'Cuentos Interactivos',
      descripcion: 'Descubre historias mágicas y cuentos ilustrados.'
    }
  ];
}
