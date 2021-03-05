import { Injectable } from '@angular/core';
import { Moto } from '@moto/shared/model/moto';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class MotoService {

  moto: Moto;
  urlMotos: string = "/motos";

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Moto[]>(`${environment.endpoint}${this.urlMotos}`);
  }

  public crear(moto: Moto) {
    return this.http.doPost<Moto, boolean>(`${environment.endpoint}${this.urlMotos}`, moto);
  }

  public actualizar(moto: Moto, idMoto:number) {
    return this.http.doPut<Moto, boolean>(`${environment.endpoint}${this.urlMotos}/${idMoto}`, moto);
  }

  public eliminar(idMoto: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}${this.urlMotos}/${idMoto}`);
  }
}
