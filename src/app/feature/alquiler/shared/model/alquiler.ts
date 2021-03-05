import { Cliente } from "@cliente/shared/model/cliente";
import { Moto } from "@moto/shared/model/moto";

export class Alquiler {
  id: number;
  fechaAlquiler: string;
  fechaEntrega: string;
  idCliente: number;
  idMoto: number;
  valorPago: number;
  cliente: Cliente;
  moto: Moto

  constructor(
    id: number,
    fechaAlquiler: string,
    fechaEntrega: string,
    idCliente: number,
    idMoto: number,
  ) {
    this.id = id;
    this.fechaAlquiler = fechaAlquiler;
    this.fechaEntrega = fechaEntrega;
    this.idCliente = idCliente;
    this.idMoto = idMoto;
  }
}
