import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDevolucionComponent } from './components/crear-devolucion/crear-devolucion.component';
import { ListarDevolucionComponent } from './components/listar-devolucion/listar-devolucion.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListarDevolucionComponent
      },
      {
        path: 'crear',
        component: CrearDevolucionComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevolucionRoutingModule { }
