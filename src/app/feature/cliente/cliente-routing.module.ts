import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListarClienteComponent
      },
      {
        path: 'crear',
        component: CrearClienteComponent
      },
      {
        path: 'editar',
        component: EditarClienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
