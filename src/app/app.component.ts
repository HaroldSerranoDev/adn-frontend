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
    { url: '/home', nombre: 'inicio', data:'homeNav'},
    { url: '/clientes', nombre: 'clientes', data:'clientesNav'},
    { url: '/motos', nombre: 'motos', data:'motosNav'},
    { url: '/alquileres', nombre: 'alquileres', data:'alquileresNav' },
    { url: '/devoluciones', nombre: 'devoluciones', data:'devolucionesNav' },
    { url: '/cola-mensajeria', nombre: 'cola mensajería', data:'colaMenajeriaNav' }
  ];
}
