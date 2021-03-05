import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Cliente } from '@cliente/shared/model/cliente';


@Injectable()
export class ClienteService {

   cliente: Cliente;
   urlClientes: string = "/clientes";

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Cliente[]>(`${environment.endpoint}${this.urlClientes}`);
  }

  public crear(cliente: Cliente) {
    return this.http.doPost<Cliente, boolean>(`${environment.endpoint}${this.urlClientes}`, cliente);
  }

  public actualizar(cliente: Cliente, idCliente:number) {
    return this.http.doPut<Cliente, boolean>(`${environment.endpoint}${this.urlClientes}/${idCliente}`, cliente);
  }

  public eliminar(idCliente: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}${this.urlClientes}/${idCliente}`);
  }
}
