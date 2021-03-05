import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'clientes', loadChildren: () => import('@cliente/cliente.module').then(mod => mod.ClienteModule) },
  { path: 'motos', loadChildren: () => import('@moto/moto.module').then(mod => mod.MotoModule) },
  { path: 'alquileres', loadChildren: () => import('@alquiler/alquiler.module').then(mod => mod.AlquilerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }