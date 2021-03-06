import { Injectable } from '@angular/core';
import { Devolucion } from '@devolucion/shared/model/devolucion';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class DevolucionService {

  devolucion: Devolucion;
  urlDevolucions: string = "/devoluciones";

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Devolucion[]>(`${environment.endpoint}${this.urlDevolucions}`);
  }

  public crear(devolucion: Devolucion) {
    return this.http.doPost<Devolucion, boolean>(`${environment.endpoint}${this.urlDevolucions}`, devolucion);
  }

}
