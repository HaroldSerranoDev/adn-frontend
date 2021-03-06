import { NgModule } from '@angular/core';

import { ListarDevolucionComponent } from './components/listar-devolucion/listar-devolucion.component';
import { SharedModule } from '@shared/shared.module';
import { DevolucionService } from './shared/service/devolucion.service';
import { DevolucionRoutingModule } from '@devolucion/devolucion-routing.module';
import { CrearDevolucionComponent } from '@devolucion/components/crear-devolucion/crear-devolucion.component';
import { FormularioDevolucionComponent } from './shared/components/formulario-devolucion/formulario-devolucion.component';


@NgModule({
  declarations: [
    FormularioDevolucionComponent,
    CrearDevolucionComponent,
    ListarDevolucionComponent
  ],
  imports: [
    DevolucionRoutingModule,
    SharedModule
  ],
  providers: [DevolucionService]
})
export class DevolucionModule { }
