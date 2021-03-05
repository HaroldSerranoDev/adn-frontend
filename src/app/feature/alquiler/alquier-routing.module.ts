import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAlquilerComponent } from './components/crear-alquiler/crear-alquiler.component';
import { EditarAlquilerComponent } from './components/editar-alquiler/editar-alquiler.component';
import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListarAlquilerComponent
      },
      {
        path: 'crear',
        component: CrearAlquilerComponent
      },
      {
        path: 'editar',
        component: EditarAlquilerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlquilerRoutingModule { }
