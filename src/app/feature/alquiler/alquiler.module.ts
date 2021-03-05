import { NgModule } from '@angular/core';

import { ListarAlquilerComponent } from './components/listar-alquiler/listar-alquiler.component';
import { SharedModule } from '@shared/shared.module';
import { AlquilerService } from './shared/service/alquiler.service';
import { AlquilerRoutingModule } from '@alquiler/alquier-routing.module';
import { CrearAlquilerComponent } from '@alquiler/components/crear-alquiler/crear-alquiler.component';
import { EditarAlquilerComponent } from '@alquiler/components/editar-alquiler/editar-alquiler.component';
import { FormularioAlquilerComponent } from './shared/components/formulario-alquiler/formulario-alquiler.component';


@NgModule({
  declarations: [
    FormularioAlquilerComponent,
    CrearAlquilerComponent,
    EditarAlquilerComponent,
    ListarAlquilerComponent
  ],
  imports: [
    AlquilerRoutingModule,
    SharedModule
  ],
  providers: [AlquilerService]
})
export class AlquilerModule { }
