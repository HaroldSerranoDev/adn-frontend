import { NgModule } from '@angular/core';

import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { SharedModule } from '@shared/shared.module';
import { ClienteService } from './shared/service/cliente.service';
import { ClienteRoutingModule } from '@cliente/cliente-routing.module';
import { CrearClienteComponent } from '@cliente/components/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from '@cliente/components/editar-cliente/editar-cliente.component';
import { FormularioClienteComponent } from './shared/components/formulario-cliente/formulario-cliente.component';


@NgModule({
  declarations: [
    FormularioClienteComponent,
    CrearClienteComponent,
    EditarClienteComponent,
    ListarClienteComponent
  ],
  imports: [
    ClienteRoutingModule,
    SharedModule
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
