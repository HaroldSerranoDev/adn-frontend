import { AlquilerModule } from '@alquiler/alquiler.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { DevolucionModule } from '@devolucion/devolucion.module';
import { HomeComponent } from '@home/home.component';
import { MotoModule } from '@moto/moto.module';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './feature/cliente/cliente.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    MotoModule,
    AlquilerModule,
    DevolucionModule,
    CoreModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
