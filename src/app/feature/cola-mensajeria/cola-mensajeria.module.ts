import { NgModule } from '@angular/core';
import { ColaMensajeriaRoutingModule } from '@colaMensajeria/cola-mensajeria-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ColaMensajeriaComponent } from './components/cola-mensajeria/cola-mensajeria.component';
import { EnviarMensajeComponent } from './components/enviar-mensaje/enviar-mensaje.component';
import { RecibirMensajeComponent } from './components/recibir-mensaje/recibir-mensaje.component';
import { ColaMensajeriaService } from './shared/service/cola-mensajeria.service';


@NgModule({
  declarations: [
    ColaMensajeriaComponent,
    RecibirMensajeComponent,
    EnviarMensajeComponent
  ],
  imports: [
    ColaMensajeriaRoutingModule,
    SharedModule
  ],
  providers: [ColaMensajeriaService]
})
export class ColaMesajeriaModule { }
