import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'inicio' },
    { url: '/clientes', nombre: 'clientes' },
    { url: '/motos', nombre: 'motos' },
    { url: '/alquileres', nombre: 'alquileres' },
    { url: '/devoluciones', nombre: 'devoluciones' }
  ];
}
