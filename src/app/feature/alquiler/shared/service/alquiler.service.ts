import { Injectable } from '@angular/core';
import { Alquiler } from '@alquiler/shared/model/alquiler';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class AlquilerService {

  alquiler: Alquiler;
  urlAlquilers: string = "/alquileres";

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Alquiler[]>(`${environment.endpoint}${this.urlAlquilers}`);
  }

  public crear(alquiler: Alquiler) {
    return this.http.doPost<Alquiler, boolean>(`${environment.endpoint}${this.urlAlquilers}`, alquiler);
  }

  public actualizar(alquiler: Alquiler, idAlquiler:number) {
    return this.http.doPut<Alquiler, boolean>(`${environment.endpoint}${this.urlAlquilers}/${idAlquiler}`, alquiler);
  }

  public eliminar(idAlquiler: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}${this.urlAlquilers}/${idAlquiler}`);
  }
}
