import { NgModule } from '@angular/core';

import { ListarMotoComponent } from './components/listar-moto/listar-moto.component';
import { SharedModule } from '@shared/shared.module';
import { MotoService } from './shared/service/moto.service';
import { MotoRoutingModule } from '@moto/moto-routing.module';
import { CrearMotoComponent } from '@moto/components/crear-moto/crear-moto.component';
import { EditarMotoComponent } from '@moto/components/editar-moto/editar-moto.component';
import { FormularioMotoComponent } from '@moto/shared/components/formulario-moto/formulario-moto.component';


@NgModule({
  declarations: [
    FormularioMotoComponent,
    CrearMotoComponent,
    EditarMotoComponent,
    ListarMotoComponent
  ],
  imports: [
    MotoRoutingModule,
    SharedModule
  ],
  providers: [MotoService]
})
export class MotoModule { }
