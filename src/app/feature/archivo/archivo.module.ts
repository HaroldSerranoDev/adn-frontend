import { NgModule } from '@angular/core';
import { ArchivoRoutingModule } from '@archivo/archivo-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ArchivoComponent } from './components/archivo/archivo.component';
import { EnviarArchivoComponent } from './components/enviar-archivo/enviar-archivo.component';
import { RecibirArchivoComponent } from './components/recibir-archivo/recibir-archivo.component';
import { ArchivoService } from './shared/service/archivo.service';


@NgModule({
  declarations: [
    ArchivoComponent,
    EnviarArchivoComponent,
    RecibirArchivoComponent
  ],
  imports: [
    ArchivoRoutingModule,
    SharedModule
  ],
  providers: [ArchivoService]
})
export class ArchivoModule { }
