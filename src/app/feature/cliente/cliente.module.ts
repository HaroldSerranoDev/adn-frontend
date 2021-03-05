import { NgModule } from '@angular/core';

import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { SharedModule } from '@shared/shared.module';
import { ClienteService } from './shared/service/cliente.service';
import { ClienteRoutingModule } from './cliente-routing.module';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';


@NgModule({
  declarations: [
    CrearClienteComponent,
    ListarClienteComponent
  ],
  imports: [
    ClienteRoutingModule,
    SharedModule
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
