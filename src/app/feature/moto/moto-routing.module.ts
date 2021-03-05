import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMotoComponent } from './components/crear-moto/crear-moto.component';
import { EditarMotoComponent } from './components/editar-moto/editar-moto.component';
import { ListarMotoComponent } from './components/listar-moto/listar-moto.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListarMotoComponent
      },
      {
        path: 'crear',
        component: CrearMotoComponent
      },
      {
        path: 'editar',
        component: EditarMotoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotoRoutingModule { }
