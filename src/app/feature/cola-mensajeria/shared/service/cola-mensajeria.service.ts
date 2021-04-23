import { Injectable } from '@angular/core';
import { Mensaje } from '@colaMensajeria/shared/model/mensaje';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class ColaMensajeriaService {

  urlColaMensajerias: string = "/cola-mensajeria";

  constructor(protected http: HttpService) {}

  public consultar(nombreCola: String) {
    return this.http.doGet<Mensaje>(`${environment.endpoint}${this.urlColaMensajerias}/${nombreCola}`);
  }

  public enviar(mensaje: Mensaje) {
    return this.http.doPost<Mensaje, boolean>(`${environment.endpoint}${this.urlColaMensajerias}`, mensaje);
  }

}
